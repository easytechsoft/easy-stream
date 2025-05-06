<script >
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'primeicons/primeicons.css'
import FooterComponent from './components/Footer/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style >
body {
  background-color: rgba(10, 22, 38, 1);

}
</style>
