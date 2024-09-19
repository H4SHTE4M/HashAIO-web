<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <el-input
          style="width: 240px"
          type="email"
          v-model="email"
          placeholder="Your Email Address"
        />
      </div>
      <div class="form-group">
        <el-input
          style="width: 240px"
          type="password"
          v-model="password"
          placeholder="Your password"
          show-password
        />
      </div>
      <el-button type="primary" native-type="submit">Login</el-button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    handleLogin() {
      event.preventDefault()
      if (this.email && this.password) {
        // 发起登录请求
        this.$emit('login', { email: this.email, password: this.password })
      } else {
        this.errorMessage = 'Please fill in all fields'
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
