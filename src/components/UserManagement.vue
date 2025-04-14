<template>
  <div>
    <h2>用户管理</h2>
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="editUser(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalUsers"
    />
  </div>
</template>

<script>
export default {
  name: 'UserManagement',
  data() {
    return {
      users: [],
      currentPage: 1,
      pageSize: 10,
      totalUsers: 0,
    };
  },
  methods: {
    fetchUsers() {
      // 模拟数据获取
      this.users = Array.from({ length: this.pageSize }, (_, i) => ({
        id: i + 1 + (this.currentPage - 1) * this.pageSize,
        name: `用户${i + 1}`,
        email: `user${i + 1}@example.com`,
      }));
      this.totalUsers = 100; // 假设总用户数为 100
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.fetchUsers();
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.fetchUsers();
    },
    editUser(user) {
      alert(`编辑用户: ${user.name}`);
    },
    deleteUser(user) {
      alert(`删除用户: ${user.name}`);
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* 添加样式美化 */
</style>