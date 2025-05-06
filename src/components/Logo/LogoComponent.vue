<template >
  <div class="logo">
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
  }
  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
