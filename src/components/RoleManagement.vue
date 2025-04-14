<template>
  <div>
    <h2>角色管理</h2>
    <el-table :data="roles" style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="name" label="角色名"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="editRole(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteRole(scope.row)">删除</el-button>
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
      :total="totalRoles"
    />
  </div>
</template>

<script>
export default {
  name: 'RoleManagement',
  data() {
    return {
      roles: [],
      currentPage: 1,
      pageSize: 10,
      totalRoles: 0,
    };
  },
  methods: {
    fetchRoles() {
      // 模拟数据获取
      this.roles = Array.from({ length: this.pageSize }, (_, i) => ({
        id: i + 1 + (this.currentPage - 1) * this.pageSize,
        name: `角色${i + 1}`,
      }));
      this.totalRoles = 50; // 假设总角色数为 50
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.fetchRoles();
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.fetchRoles();
    },
    editRole(role) {
      alert(`编辑角色: ${role.name}`);
    },
    deleteRole(role) {
      alert(`删除角色: ${role.name}`);
    },
  },
  mounted() {
    this.fetchRoles();
  },
};
</script>

<style scoped>
/* 添加样式美化 */
</style>