<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // 在这里处理登录逻辑，例如发送请求到后端API
      console.log('用户名:', this.username, '密码:', this.password);
      // 根据登录结果，你可以重定向用户到受保护的页面或显示错误信息
    },
  },
};
</script>

<style scoped>
.login-container {
  /* 添加一些基本的样式 */
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>