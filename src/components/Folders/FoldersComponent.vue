<template>
  <div class="question" @click="open_accordion">
    <div class="top">
      <h3>
        Your Folder Name
      </h3>
      <div class="d-flex align-items-center">
        <div class="operation" :class="{open: open}">
          <button class="upload">
            upload
          </button>
          <button class="setting">
          <i class="pi pi-cog"></i>
        </button>
        </div>
        <div class="icon">
          <i class="pi pi-chevron-down" v-if="!open" style="font-size: 1.5rem"></i>
          <i class="pi pi-chevron-up" v-else style="font-size: 1.5rem"></i>
        </div>
      </div>
    </div>
    <div class="answer d-flex justify-content-between gap-1 flex-wrap" :class="{ open: open }">
      <VideoBoxComponent />
      <VideoBoxComponent />
      <VideoBoxComponent />
      <VideoBoxComponent />
      <VideoBoxComponent />
    </div>
  </div>
</template>
<script>
import VideoBoxComponent from '../VideoBox/VideoBoxComponent.vue';

export default {
  name: 'FolderComponent',
  components: {
    VideoBoxComponent
  },
  data() {
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

.question .answer.open {
  height: fit-content;
  /* max-height: 5000px; */
  padding: 1rem;
  margin-top: 2rem;
}
.operation {
 display: none
}
.operation.open {
  display: block;
}
.upload {
  all: unset;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  background: rgba(11, 192, 125, 1);
  margin-right: 0.5rem;
}
.setting {
    all: unset;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    background: rgba(45, 70, 105, 1);
    color: #fff;
    margin-right: 1rem;
  }
</style>
