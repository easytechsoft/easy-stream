<template>
  <div class="faq">
    <div class="container">
      <h2>
        Frequently Asked Questions
      </h2>
      <div class="content">
        <FaqQuestionComponent />
        <FaqQuestionComponent />
        <FaqQuestionComponent />
        <FaqQuestionComponent />
      </div>
    </div>
  </div>
</template>
<script>
import FaqQuestionComponent from './FaqQuestionComponent.vue';

export default {
  name: 'FaqComponent',
  components: {
    FaqQuestionComponent
  }
}
</script>
<style scoped>
.faq h2 {
  background: linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%);
  background-clip: text;
  color: transparent;
  text-align: center;
  margin: 5rem 0;
}


</style>
