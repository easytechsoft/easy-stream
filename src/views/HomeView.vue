<template>
  <div class="home">
    <BannerComponent />
    <WhyComponent />
    <ReasonsComponent />
    <FaqComponent />
    <SubscribeNowComponent />
  </div>
</template>
<script >
import BannerComponent from '@/components/Home/Banner/BannerComponent.vue';
import FaqComponent from '@/components/Home/FAQ/FaqComponent.vue';
import ReasonsComponent from '@/components/Home/Reasons/ReasonsComponent.vue';
import SubscribeNowComponent from '@/components/Home/SubscripeNow/SubscribeNowComponent.vue';
import WhyComponent from '@/components/Home/WhyUs/WhyComponent.vue';
export default {
  name: 'HomeView' ,
  components: {
    BannerComponent,
    WhyComponent,
    ReasonsComponent,
    FaqComponent,
    SubscribeNowComponent
  }
}
</script>

<style scoped>
</style>
