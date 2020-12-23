<template>
  <div class="login">
    <div class="main">
      <div class="header">Login</div>
      <div class="content">
        <label for="email">E-mail</label>
        <input id="email" type="text" v-model="email" />
      </div>
      <div class="content">
        <label for="password">password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          @keyup.enter="makeLogin"
        />
      </div>

      <div class="buttons">
        <button @click="makeLogin">login</button>
      </div>

      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'Login',
  data() {
    return {
      email: 'user@user.com',
      password: '123456',
      error: ''
    }
  },
  methods: {
    ...mapActions(["loginUser"]),
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async makeLogin() {
      if (!this.validateEmail) {
        this.error = "Email is not valid"
        return;
      }
      await this.loginUser({ email: this.email, password: this.password })
      this.error = ''
      await this.$router.push('../Home')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    padding: 30px 15px;
    background: #fff;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    .header {
      text-align: center;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
    }
    .error {
      background-color: red;
      padding: 10px;
      font-size: 12px;
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>