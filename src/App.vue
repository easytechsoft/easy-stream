<script >
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  components: {
    HeaderComponent
  }
}
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style >
body {
  background-color: rgba(10, 22, 38, 1);

}
</style>
