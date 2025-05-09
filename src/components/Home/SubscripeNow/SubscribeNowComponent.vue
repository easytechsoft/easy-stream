<template>
  <div class="subscribe-now">
    <div class="container">
      <div class="subscribe-box">
        <div class="btn">
          <h2>
            Subscribe
            Now
          </h2>
          <button @click="handleGetStarted">
            Get Started
          </button>
        </div>
        <ul class="features">
          <li>Unlimited Bandwidth</li>
          <li>Advanced DRM</li>
          <li>Real-Time Analytics</li>
          <li>Screen Capture Block</li>
          <li>Priority 24/7 Support</li>
          <li>API Access</li>
        </ul>
        <div class="image">
          <img src="@/assets/subscribe.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'SubscribeNowComponent',
  setup() {
    const auth = useAuthStore()
    const router = useRouter()
    const handleGetStarted = () => {
      if (auth.isAuthenticated) {
        router.push('/payment')
      } else {
        router.push('/login')
      }
    }
    return { handleGetStarted }
  }
}
</script>
<style scoped>
.subscribe-now {
  margin-top: 5rem;
  padding: 2rem 0;
}

.subscribe-box {
  padding: 2rem;
  background: linear-gradient(180deg, #0A1626 0%, #25518C 100%);
  border: 1px solid rgba(44, 67, 109, 1);
  border-radius: 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.subscribe-box .btn {
  color: #fff;
  width: 25%;
}

.subscribe-box .btn h2 {
  font-size: 2.8rem;
  text-align: left;
}

.subscribe-box .btn button {
  all: unset;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 1);
  color: rgba(10, 22, 38, 1);
  cursor: pointer;
  border-radius: 50px;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

.subscribe-box .features {
  color: #fff;
  list-style-type: circle;
  width: 25%;
}

.subscribe-box .features li {
  padding: 0.5rem 0;
}

.subscribe-box .image {
  width: 25%;
}

.subscribe-box .image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
