<template>
  <div class="data-view">
    <dv-full-screen-container class='bc'>
      <dv-loading v-if="isLoading">
        正在加载数据
      </dv-Loading>
      <headerPolicy>
      </headerPolicy>

      <div class="main">
        <revenue></revenue>
        <div class="rightContainer">
          <total></total>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import headerPolicy from '../components/BigData1/headerPolicy.vue'
import revenue from '../components/BigData1/revenue.vue'
import total from '../components/BigData1/total.vue'
export default {
  name: 'BigData1',
  components: { headerPolicy, revenue, total },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.data-view {
  width: 100%;
  height: 100%;
  color: #dadada;
}
.bc {
  background-color: #03071b;
  display: flex;
  flex-direction: column;
}
.main {
  margin-top: 6vh;
  margin-left: 1vw;
  height: 91%;
  width: 100%;
  display: flex;
  .rightContainer {
    margin-left: 2vw;
    width: 77%;
    height: 100%;
  }
}
</style>
