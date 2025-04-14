<template>
  <div>
    <p>这是一个示例组件，以下是一些模拟数据：</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data() {
    return {
      // 模拟数据
      items: [
        { id: 1, name: '示例数据 1' },
        { id: 2, name: '示例数据 2' },
        { id: 3, name: '示例数据 3' },
      ],
    };
  },
};
</script>

<style scoped>
div {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>