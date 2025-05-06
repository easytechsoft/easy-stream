<template>
  <div class="reasons">
    <div class="container">
      <h2 class="text-center">
        Key <span>Reasons</span> to Sign Up
      </h2>
      <div class="content">
        <div class="column d-flex flex-column">
          <div class="box">
            <h5>
              Fast & Secure
              Uploads
            </h5>
            <div class="image">
              <img class="ms-auto" src="@/assets/reasons/1.png" alt="">
            </div>
          </div>
          <div class="box">
            <h5 class="w-100">
              Unlimited Bandwidth
            </h5>
            <div class="image">
              <img class="mx-auto" src="@/assets/reasons/2.png" alt="">
            </div>
          </div>
        </div>
        <div class="column box">
          <h5 class="mx-auto text-center">
            Easy to
            use on Phone
          </h5>
          <div class="image">
            <img class="mx-auto" src="@/assets/reasons/3.png" alt="">
          </div>
        </div>
        <div class="column box d-flex flex-column justify-content-between">
          <div>
            <h5 class="">
              Seamless Integration with Any Site
            </h5>
            <p>
              Embed your videos on WordPress, Moodle, or any platform with one click.
            </p>
          </div>
          <div class="image">
            <img class="mx-auto" src="@/assets/reasons/4.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReasonsComponent'
}
</script>
<style scoped>
.reasons  {
  margin-bottom: 6rem;
}
.reasons .container h2 {
  color: #fff;
  margin-bottom: 4rem;
}

.reasons .container h2 span {
  background: linear-gradient(93.27deg, #40F99B -21.35%, #7DABFF 103.22%);
  background-clip: text;
  color: transparent;
}

.content {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.column {
  width: calc(100% / 3);
}

.content .box {
  border-radius: 14px;
  background: linear-gradient(180deg, #0A1626 0%, #4790F1 162.04%);
  position: relative;
  color: rgba(255, 255, 255, 1);
  padding: 1rem 1rem 0 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(44, 67, 109, 1)
}

.content .box h5 {
  font-size: 2rem;
  width: 70%;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
