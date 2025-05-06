<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <LogoComponent />
      <div class="auth-btns">
        <router-link class="login">Login </router-link>
        <router-link class="register" >Sign up</router-link>
      </div>
    </div>
  </header>
</template>
<script>
import LogoComponent from '../Logo/LogoComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LogoComponent
  }
}
</script>
<style scoped>
header {
  padding: 1.5rem 0;
  background-color: rgba(10, 22, 38, 1);
}

.auth-btns a {
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
</style>
