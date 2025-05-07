import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/config/apis/index.js'

// Helper functions for cookies
function setCookie(name, value, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'
}
function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=')
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, null)
}
function removeCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
}

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const user = ref(null);
  const accessToken = ref(null);
  const refreshToken = ref(null);
  const returnUrl = ref(null);
  const isInitialized = ref(false);

  // Initialize from cookies
  const initialize = async () => {
    accessToken.value = getCookie('access_token')
    refreshToken.value = getCookie('refresh_token')
    user.value = JSON.parse(getCookie('user') || 'null')
    isInitialized.value = true
  }

  // Sign up action
  const signUp = async (userData) => {
    const response = await api.post('/customer/sign-up', userData)
    await handleAuthResponse(response.data)
    returnUrl.value = null
    return true
  }

  // Sign in action
  const signIn = async (credentials) => {
    const response = await api.post('/customer/sign-in', credentials)
    await handleAuthResponse(response.data)
    returnUrl.value = null
    return true
  }

  // Handle auth response (sign-in/sign-up success)
  const handleAuthResponse = async (data) => {
    accessToken.value = data.access_token
    refreshToken.value = data.refresh_token

    // Store tokens in cookies
    setCookie('access_token', data.access_token)
    if (data.refresh_token) {
      setCookie('refresh_token', data.refresh_token)
    }

    // Wait for next tick to ensure accessToken is reactive before fetching profile
    await Promise.resolve()

    // Fetch user data
    return fetchUserData()
  }

  // Fetch user data
  const fetchUserData = async () => {
    const response = await api.get('/customer/profile')
    user.value = response.data
    setCookie('user', JSON.stringify(response.data))
    return response.data
  }

  // Refresh token
  const refreshTokenHandler = async () => {
    try {
      // const response = await api.post('/customer/refresh-token', {
      //   refresh_token: refreshToken.value
      // })
      // accessToken.value = response.data.access_token
      setCookie('access_token', refreshToken.value)
      return refreshToken.value
    } catch (error) {
      await logout()
      throw error
    }
  }

  // Logout action
  const logout = async () => {
    // try {
    //   await api.post('/customer/logout', {
    //     refresh_token: refreshToken.value
    //   })
    // } finally {
    clearAuthData()
    router.push('/login')
  }
  // }

  // Clear auth data
  const clearAuthData = () => {
    user.value = null
    accessToken.value = null
    refreshToken.value = null
    removeCookie('access_token')
    removeCookie('refresh_token')
    removeCookie('user')
  }

  const isAuthenticated = computed(() => !!accessToken.value)

  return {
    user,
    accessToken,
    refreshToken,
    returnUrl,
    isInitialized,
    initialize,
    signUp,
    signIn,
    refreshTokenHandler,
    logout,
    fetchUserData,
    isAuthenticated
  }
})
