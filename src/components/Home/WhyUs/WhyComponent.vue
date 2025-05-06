<template>
  <div class="why-us">
    <div class="container">
      <h4 class="text-center">
        Welcome to our platform dedicated to securing and storing educational videos. Enjoy top-tier security, instant
        access to your content, and easy sharing on any website.
        Try our service now and see the difference!
      </h4>
    </div>
    <div class="container choose">
      <h2 class="text-center text-capitalize">
        Why Choose Us?
      </h2>
      <div class="boxes">
        <div class="box">
          <div class="top">
            <div class="image">
              <img src="@/assets/icons/icon1.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <h5>
              True Content Protection
            </h5>
            <p>
              Stop piracy for good unbreakable security — no more leaks, no more stolen content.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="top">
            <div class="image">
              <img src="@/assets/icons/icon2.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <h5>
              Blazing-Fast Streaming
            </h5>
            <p>
              Global CDN network ensures buffer-free viewing, anywhere in the world.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="top">
            <div class="image">
              <img src="@/assets/icons/icon3.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <h5>
              Universal Compatibility
            </h5>
            <p>
              Plays seamlessly on all devices—even older ones—so no customer gets left behind.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="top">
            <div class="image">
              <img src="@/assets/icons/icon4.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <h5>
              Quick & Easy Setup
            </h5>
            <p>
              Integrate in minutes with step-by-step guides and expert support.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="top">
            <div class="image">
              <img src="@/assets/icons/icon5.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <h5>
              Actionable Analytics
            </h5>
            <p>
              Get deep insights on viewers, traffic, and threats to stay ahead.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="top">
            <div class="image">
              <img src="@/assets/icons/icon6.png" alt="">
            </div>
          </div>
          <div class="bottom">
            <h5>
              24/7 Priority Support
            </h5>
            <p>
              Instant help, anytime—because your business never sleeps.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WhyComponent'
}
</script>
<style scoped>
.why-us {
  color: #fff;
  margin-top: 6rem;
}

.why-us h4 {
  margin: 1rem auto 8rem;
  width: 80%;
  color: rgba(208, 245, 255, 1);
  line-height: 1.6;
}

.choose {
  background: linear-gradient(180deg, #7DABFF -47.22%, #0F2036 55.83%, #0A1626 100%);
  padding: 4rem 2rem 8rem 2rem;
  border-radius: 57px;
  margin-bottom: 2rem;
}

.choose h2 {
  background: linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%);
  background-clip: text;
  color: transparent;
  margin-bottom: 4rem;
}

.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.boxes .box {
  width: calc(90% / 3);
  background: rgba(15, 32, 54, 0.7);
  border: 1px solid rgba(44, 67, 109, 1);
  border-radius: 14px;
  padding: 2rem 1rem;
  margin-bottom: 1rem;
}

.boxes .box .top {
  margin-bottom: 1rem;
}

.boxes .box .top .image {
  width: 45px;
  height: 45px;
}

.boxes .box .top .image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.boxes .box h5 {
  color: rgba(255, 255, 255, 1);
}

.boxes .box p {
  color: rgba(225, 225, 225, 1);

}
</style>
