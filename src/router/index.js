import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/profile',
    name: 'profile_layout',
    component: () => import('@/views/ProfileLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/profile/my-videos',
        name: 'my_videos',
        component: () => import('@/views/Profile/VideosView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/account-and-payment',
        name: 'account_payment',
        component: () => import('@/views/Profile/AccountView.vue'),
        meta: { requiresAuth: true },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: {
      requiresGuest: true,
      redirectAuthenticatedTo: '/profile/my-videos'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: {
      requiresGuest: true,
      redirectAuthenticatedTo: '/profile/my-videos'
    }
  },
  {
    path: '/forget-password',
    name: 'forget_password',
    component: () => import('@/views/auth/ForgetPasswordView.vue'),
    meta: {
      requiresGuest: true,
      redirectAuthenticatedTo: '/login'
    }
  },
  {
    path: '/reset-password',
    name: 'reset_password',
    component: () => import('@/views/auth/ResetPasswordView.vue'),
    meta: {
      requiresGuest: true,
      redirectAuthenticatedTo: '/login'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('@/views/NotFound.vue'),
    meta: { requiresAuth: false }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  // Wait for auth to initialize
  if (!authStore.isInitialized) {
    await authStore.initialize()
  }

  // Redirect to login if route requires auth and user is not authenticated
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    authStore.returnUrl = to.fullPath
    return '/login'
  }

  // Redirect away from auth pages if already authenticated
  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return to.meta.redirectAuthenticatedTo || '/profile/my-videos'
  }
})

export default router
