<template>
  <div class="my-videos">
    <h1 class="page-title">
      Secure Your Videos <span>Now</span>
    </h1>
    <div class="options">
      <button>
        <p>Upload</p>
        <i class="pi pi-cloud-upload"></i>
      </button>
      <button>
        <p>Create Folder</p>
        <i class="pi pi-folder-open"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VideosView'
}
</script>
<style scoped>
.page-title {
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(180deg, #FFFFFF 0%, #999999 171.43%);
  background-clip: text;
  color: transparent;
}

.page-title span {
  background: linear-gradient(90deg, #40F99B 0%, #7DABFF 100%);
  background-clip: text;
  color: transparent;
}

.options {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
}

.options button {
  all: unset;
  cursor: pointer;
  padding: 1.5rem;
  width: 35%;
  background: rgba(26, 40, 60, 1);
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  border: 1px solid transparent;
}

.options button:hover,
.options button.active {
  border-color: #7DABFF;
}

.options button p {
  margin: 0;
  color: #fff;
}

.options button i {
  color: rgba(89, 110, 149, 1);
  font-size: 1.2rem;
}

.options button:first-child {
  margin-right: 1rem;
}
</style>
