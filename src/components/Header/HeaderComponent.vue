<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <LogoComponent />
      <div class="auth-btns">
        <template v-if="!isAuthenticated">
          <router-link class="login" :to="{ name: 'login' }">Login</router-link>
          <router-link class="register" :to="{ name: 'register' }">Sign up</router-link>
        </template>
        <template v-else>
          <router-link to="/profile" class="username">{{ user?.name || user?.username }}</router-link>
          <button class="logout" @click="handleLogout">Sign out</button>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LogoComponent from '../Logo/LogoComponent.vue'

export default {
  name: 'HeaderComponent',
  components: {
    LogoComponent
  },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const isAuthenticated = computed(() => authStore.isAuthenticated)
    const user = computed(() => authStore.user)

    const handleLogout = async () => {
      try {
        await authStore.logout()
        router.push({ name: 'home' })
      } catch (error) {
        console.error('Logout error:', error)
      }
    }

    return {
      isAuthenticated,
      user,
      handleLogout
    }
  }
}
</script>

<style scoped>
header {
  padding: 1.5rem 0;
  background-color: rgba(10, 22, 38, 1);
  position: sticky;
  top: 0;
  z-index: 500;
  border-bottom: 1px solid rgba(44, 67, 109, 1)
}

.auth-btns {
  display: flex;
  align-items: center;
}

.auth-btns a,
.auth-btns button {
  all: unset;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.auth-btns a.login {
  background: rgba(32, 52, 89, 1);
  color: #fff;
  margin-right: 1rem;
}

.auth-btns a.register {
  border: 2px solid rgba(64, 249, 155, 1);
  color: #fff;
  background-color: rgba(10, 22, 38, 1);
}

.username {
  all: unset;
  color: #fff !important;
  margin-right: 1rem;
  font-weight: bold;
}

.logout {
  border: 2px solid #ff6b6b !important;
  color: #fff !important;
  background-color: rgba(10, 22, 38, 1);
  transition: all 0.3s ease;
}

.logout:hover {
  background-color: #ff6b6b;
}
</style>
