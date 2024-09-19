<template>
  <div id="app">
    <Login v-if="!isLoggedIn" @login="loginUser" />
    <div v-else>
      <h2>Welcome, you are logged in!</h2>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Login from './components/Login.vue';

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    Login,
  },
  methods: {
    async loginUser(userData) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/login', userData);
        if (response.data.success) {
          this.isLoggedIn = true;
        } else {
          alert('Login failed: ' + response.data.message);
        }
      } catch (error) {
        alert('An error occurred: ' + error.message);
      }
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
/* 全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
