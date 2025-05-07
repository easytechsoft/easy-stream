<template >
  <div class="video-box" >
    <div class="image">
      <img src="@/assets/test.png" alt="">
    </div>
    <div class="video-info d-flex justify-content-between align-items-center mb-2">
      <h5 class="m-0 fw-bold">
        Your Video Name
      </h5>
      <div class="video-duration">
        32:30
      </div>
    </div>
    <div class="btns py-2 d-flex justify-content-between align-items-center">
      <button class="play" >
        <i class="pi pi-play"></i>
        Play
      </button>
      <div class="operation">
        <button class="clone">
          <i class="pi pi-clone"></i>
          Embed
        </button>
        <button class="setting">
          <i class="pi pi-cog"></i>
        </button>
      </div>
    </div>
    <div class="footer d-flex justify-content-between align-items-center">
      <div class="size">
        230 MB
      </div>
      <p class="date m-0" >
        18-Apr-2024, 14:44
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VideoBoxComponent'
}
</script>
<style scoped>
  .video-box {
    width: calc(98% / 4);
    padding: 1rem;
    border-radius: 17px;
    background: rgba(36, 56, 85, 1);
    color: #fff;
    margin-bottom: 1rem;
  }
  .video-box .image {
    height: 150px;
    width: 100%;
    border-radius: 17px;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .video-box .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video-duration , .size {
    background: rgba(45, 70, 105, 1);
    padding: 0.1rem 0.5rem;
    border-radius: 8px;
  }
  .play {
    all: unset;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    background:rgba(255, 255, 255, 1);
    color:rgba(10, 22, 38, 1);
    font-weight: bold;
  }
  .clone {
    all: unset;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    background: rgba(66, 133, 244, 1);
    color: #fff;
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
  }
  .footer {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
</style>
