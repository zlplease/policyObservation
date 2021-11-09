<template>
  <div class="menu">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">首页</a-menu-item>
      <a-menu-item key="search">政策检索</a-menu-item>
      <a-menu-item key="bigData">政策大数据平台</a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["home"],
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  .ant-menu-submenu {
    padding-left: 20px;
  }
}
</style>