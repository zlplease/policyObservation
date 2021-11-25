<template>
  <div class="home">
    <div class="menu">
      <img src="../assets/logo.png"
           alt="" />
      <div class="productName">见政</div>
      <div class="item"
           :class="{ selected: page == item }"
           @click="choose(item)"
           v-for="item in items"
           :key="item.code">
        {{ item }}
      </div>
    </div>
    <Home v-if="page == '首页'" @searchKeywords="searchKeywords"></Home>
    <search v-if="page == '政策检索'" :keyword="keyword"></search>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import search from "../components/search.vue";
export default {
  components: {
    Home,
    search,
  },
  name: "home",
  data () {
    return {
      items: ["首页", "政策检索", "政策大数据平台"],
      page: "首页",
      keyword: ''
    };
  },
  methods: {
    searchKeywords(val) {
      if (val != '') {
        this.page = '政策检索'
        this.keyword = val
      }
    },
    choose (item) {
      if (item == "政策大数据平台") {
        console.log("跳转大数据平台");
        let routeOne = this.$router.resolve({
          name: "BigData",
          path: '/BigData1'
        });
        window.open(routeOne.href, "_blank");
      } else {
        this.page = item;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f6fc;
  .menu {
    align-items: center;
    height: 48px;
    display: flex;
    width: 100%;
    padding: 0 10%;
    background-color: white;
    box-shadow: 41px 41px 82px #cfd1d6;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .productName {
    margin-left: 12px;
    margin-right: auto;
    font-size: 20px;
    font-weight: bold;
  }
  .item {
    height: 48px;
    padding: 0 16px;
    text-align: center;
    line-height: 48px;
    margin-right: 12px;
    color: black;
    &:hover {
      background: #bad0fc;
      transition: 0.5s;
      color: white;
      cursor: pointer;
    }
  }
}

.selected {
  background-color: #417ce9;
  color: white !important;
  font-weight: bold;
}
</style>