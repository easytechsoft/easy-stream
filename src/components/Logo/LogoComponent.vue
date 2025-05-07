<template >
  <div class="logo" @click="() => $router.push({name: 'home'})">
    <img src="@/assets/logo.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'LogoComponent'
}
</script>
<style scoped>
  .logo {
    width: 170px;
    cursor: pointer;
  }
  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
