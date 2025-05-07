<template>
  <div class="login">
    <div class="container">
      <div class="left">
        <LogoComponent />
        <h1>
          Welcome <br />
          to our platform
        </h1>
        <p>
          dedicated to securing and storing educational videos. Enjoy top-tier security, instant access to your content,
          and easy sharing on any website.
          Try our service now and see the difference!
        </p>
      </div>
      <form class="right" @submit.prevent="handleRegister">
        <div class="text">
          <h2>
            Hi 👋
          </h2>
          <p>
            Today is a new day. It's your day. You shape it.
            <router-link :to="{ name: 'login' }">Login</router-link> to start managing your Needs.
          </p>
        </div>
        <div class="input">
          <label>Full Name</label>
          <input type="text" placeholder="Your full name" v-model="form.name" required>
        </div>
        <div class="input">
          <label>Username</label>
          <input type="text" placeholder="Choose a username" v-model="form.username" required>
        </div>
        <div class="input">
          <label>Phone Number</label>
          <input type="tel" placeholder="01205332266" v-model="form.phone" required>
        </div>
        <div class="input">
          <label>Password</label>
          <input type="password" placeholder="At least 8 characters" v-model="form.password" required>
        </div>
        <div class="input">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" v-model="form.password_confirmation" required
            @blur="validatePassword">
          <span v-if="passwordError" class="error-text">{{ passwordError }}</span>
        </div>

        <button class="submit" type="submit" :disabled="loading || !!passwordError">
          {{ loading ? 'Creating account...' : 'Sign up' }}
        </button>
        <div class="register">
          Already have an account? <router-link :to="{ name: 'login' }">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LogoComponent from '@/components/Logo/LogoComponent.vue'
import { useAuthStore } from '@/stores/auth'
export default {
  name: 'RegisterView',
  components: {
    LogoComponent
  },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const loading = ref(false)
    const passwordError = ref('')
    const form = ref({
      username: '',
      password: '',
      phone: '',
      name: '',
      password_confirmation: ''
    })

    const validatePassword = () => {
      if (form.value.password && form.value.password_confirmation) {
        passwordError.value = form.value.password === form.value.password_confirmation
          ? ''
          : 'Passwords do not match'
      } else {
        passwordError.value = ''
      }
    }

    const handleRegister = async () => {
      validatePassword()
      if (passwordError.value) return

      loading.value = true
      try {
        await authStore.signUp(form.value)
        router.push('/test')
      } catch (error) {
        console.error('Registration error:', error)
      } finally {
        loading.value = false
      }
    }

    return {
      form,
      loading,
      passwordError,
      validatePassword,
      handleRegister
    }
  }
}
</script>

<style scoped>
.login .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}

.login .left {
  width: 40%;
  color: #fff;
}

.login .left h1 {
  padding: 2rem 0;
}

form {
  border-radius: 20px;
  padding: 2rem;
  background: rgba(32, 52, 89, 1);
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 40%;
}

.text {
  margin-bottom: 1rem;
}

.text p a {
  all: unset;
  color: rgba(11, 192, 125, 1)
}

form .input {
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

form .input label {
  margin-bottom: 0.5rem;
}

form .input input {
  all: unset;
  padding: 1rem 0.2rem;
  border-radius: 14px;
  background: rgba(59, 80, 118, 1);
}

.submit {
  all: unset;
  color: rgba(10, 22, 38, 1);
  background: rgba(11, 192, 125, 1);
  display: block;
  text-align: center;
  padding: 0.5rem 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 14px;
}

.register {
  padding: 1rem 0;
  text-align: center;
  font-size: 1.2rem;
}

.register a {
  all: unset;
  color: rgba(125, 171, 255, 1);
}

.error-text {
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}
</style>
