<template>
  <div class="banner">
    <div class="container h-100 ">
      <div class="text ">
        <h1>
          Keep Your Educational Videos
          Secure & Protected!
        </h1>
        <button>
          Secure Your Videos Now
        </button>
      </div>
      <div class="image">
        <img src="@/assets/banner-image.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerComponent'
}
</script>
<style scoped>
.banner {
  height: 130vh;
  background-image: url('@/assets/banner-bg.png');
  background-size: cover;
}
.banner .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0 0 0;
  overflow: hidden;
}
.banner .text  {
  width: 40%;
  color: #fff;
  display: flex;
  flex-direction: column;
 align-items: center;
}
.banner .text h1 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.banner .text button {
  all: unset;
  padding: 0.5rem 1rem;
  text-align: center;
  background: linear-gradient(90deg, #0BC07D 0%, #7DABFF 100%);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  border-radius: 50px;
  width: 50%;
}
.banner .image {
  width: 100%;
  height: 70%;
}
.banner .image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media(max-width: 767px) {
  .banner .text {
    width: 100%;
  }
  .banner  {
    height: 80vh;
  }
}
</style>
