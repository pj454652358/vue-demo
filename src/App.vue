<template>
  <div class="layout">
    <header class="header">
      <div class="logo">后台管理系统</div>
      <div class="user-info">
        <span>欢迎, Admin</span>
        <el-button type="text" @click="logout">退出登录</el-button>
      </div>
    </header>
    <div class="main">
      <nav class="sidebar">
        <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" @select="handleMenuSelect">
          <el-menu-item index="/login">登录</el-menu-item>
          <el-menu-item index="/users">用户管理</el-menu-item>
          <el-menu-item index="/roles">角色管理</el-menu-item>
          <el-menu-item index="/report">报表</el-menu-item>
        </el-menu>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeMenu: '/login',
    };
  },
  methods: {
    handleMenuSelect(index) {
      this.$router.push(index);
    },
    logout() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343a40;
  color: #fff;
  padding: 10px 20px;
}
.logo {
  font-size: 20px;
  font-weight: bold;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.main {
  display: flex;
  flex: 1;
}
.sidebar {
  width: 200px;
  background-color: #2c3e50;
  color: #ecf0f1;
}
.content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
  overflow-y: auto;
}
</style>