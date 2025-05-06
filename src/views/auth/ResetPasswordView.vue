<template>
  <div class="login">
    <div class="container">

      <div class="left">
        <LogoComponent />
        <h1>
          Welcome <br />
          to our platform
        </h1>
        <p>
          dedicated to securing and storing educational videos. Enjoy top-tier security, instant access to your content,
          and easy sharing on any website.
          Try our service now and see the difference!
        </p>
      </div>
      <form class="right">
        <div class="text">
          <h2>
            Reset Password
          </h2>
          <p>
            Set a new password for your account
          </p>
        </div>
        <div class="input">
          <label>Password</label>
          <input type="text" placeholder="At least 8 characters">
        </div>
        <div class="input">
          <label>Confirm Password</label>
          <input type="text" placeholder="At least 8 characters">
        </div>

        <button class="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import LogoComponent from '@/components/Logo/LogoComponent.vue';

export default {
  name: 'ResetPasswordView',
  components: {
    LogoComponent
  }
}
</script>
<style scoped>
.login .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}

.login .left {
  width: 40%;
  color: #fff;
}

.login .left h1 {
  padding: 2rem 0;
}

form {
  border-radius: 20px;
  padding: 2rem;
  background: rgba(32, 52, 89, 1);
  color: #fff;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 40%;
}

.text {
  margin-bottom: 1rem;
}

.text p a {
  all: unset;
  color: rgba(11, 192, 125, 1)
}

form .input {
  padding: 0.5rem 0;
  /* margin-bottom: 0.2rem ; */
  display: flex;
  flex-direction: column;
}

form .input label {
  margin-bottom: 0.5rem;
}

form .input input {
  all: unset;
  padding: 1rem 0.2rem;
  border-radius: 14px;
  background: rgba(59, 80, 118, 1);
}

.forget-password {
  all: unset;
  margin: 0.5rem 0;
  display: block;
  text-align: right;
  cursor: pointer;
  color: rgba(125, 171, 255, 1);
  width: 100%;
}

.submit {
  all: unset;
  color: rgba(10, 22, 38, 1);
  background: rgba(11, 192, 125, 1);
  display: block;
  text-align: center;
  padding: 0.5rem 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 14px;
}

.register {
  padding: 1rem 0;
  text-align: center;
  font-size: 1.2rem;
}

.register a {
  all: unset;
  color: rgba(125, 171, 255, 1);
}
</style>
