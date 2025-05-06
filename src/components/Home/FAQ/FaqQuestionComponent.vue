<template>
  <div class="question" @click="open_accordion">
    <div class="top">
      <h3>What is the difference between storage and bandwidth?</h3>
      <div class="icon">
        <i class="pi pi-arrow-down-right" v-if="!open" style="font-size: 1.5rem"></i>
        <i class="pi pi-arrow-up-right" v-else style="font-size: 1.5rem"></i>
      </div>
    </div>
    <div class="answer" :class="{open: open}">
      <div class="topic">
        <h6>Bandwidth</h6>
        <p>
          is the amount of data that can be transferred in or out of a system over a specific period (like per second). It affects how fast data moves.
        </p>
      </div>
      <div class="topic">
        <h6>Storage</h6>
        <p>
          is the total amount of data you can keep or save (like files, videos, etc.).
        </p>
      </div>
      <div class="topic">
        <h6>Example</h6>
        <p>
          If a website is a library, storage is how many books it can hold, and bandwidth is how many people can enter and leave the library at once.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqQuestionComponent',
  data(){
    return {
      open: false
    }
  },
  methods: {
    open_accordion() {
      this.open = !this.open
    }
  }
}
</script>
<style scoped>
.question {
  padding: 1rem;
  background: linear-gradient(184.07deg, #203459 -62.92%, #0A1626 58.45%, #091320 179.83%);
  border: 1px solid rgba(44, 67, 109, 1);
  border-radius: 14px;
  margin-bottom: 2rem;
  cursor: pointer;
}
.question .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.question .answer {
  transition: all 0.5s;
  overflow: hidden;
  height: 0;
}
.question .answer.open{
  height: 300px;
  max-height: 1000px;
  padding: 1rem;
}
.question .answer .topic {
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.question .answer .topic h6 {
  color: rgba(160, 190, 242, 1);
}
.question .answer .topic p {
  color: rgba(255, 255, 255, 1);
}
</style>
