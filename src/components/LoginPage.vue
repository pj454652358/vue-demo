<template>
  <div class="login-container">
    <h2>登录</h2>
    <el-form :model="loginForm" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    handleLogin() {
      if (this.loginForm.username === 'admin' && this.loginForm.password === '123456') {
        this.$router.push('/users');
      } else {
        this.$message.error('用户名或密码错误');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.login-form {
  display: flex;
  flex-direction: column;
}
</style>