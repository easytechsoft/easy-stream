import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// Request interceptor to add auth token
api.interceptors.request.use(config => {
  const authStore = useAuthStore()
  if (authStore.accessToken) {
    config.headers.auth = authStore.accessToken
  }
  return config
}, error => {
  return Promise.reject(error)
})

// Response interceptor
api.interceptors.response.use(response => response, async (error) => {
  const originalRequest = error.config
  const authStore = useAuthStore()

  // If 401 and we haven't already tried to refresh
  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true

    try {
      // Try to refresh token
      await authStore.refreshTokenHandler()
      // Retry the original request
      return api(originalRequest)
    } catch (refreshError) {
      // If refresh fails, logout
      await authStore.logout()
      return Promise.reject(refreshError)
    }
  }

  return Promise.reject(error)
})

export default api
