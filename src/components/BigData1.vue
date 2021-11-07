<template>
  <div class="data-view">
    <dv-full-screen-container class='bc'>
      <dv-loading v-if="isLoading">
        正在加载数据
      </dv-Loading>
      <div class="header">
        <dv-decoration-8 class="left" />
        <div class="middleContainer">
          <div class="text">见政 | 政策大数据平台</div>
          <dv-decoration-5 class="middle"
                           dur=3 />
        </div>
        <dv-decoration-8 class="right"
                         :reverse="true" />
      </div>

      <div class="main">
        <dv-border-box-8 :reverse="true"
                         class="revenue"
                         dur=10>
          <div class="title">
            上半年财政收入排名
          </div>
          <dv-capsule-chart :config="revenueConfig"
                            class="chart" />
        </dv-border-box-8>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'BigData1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLoading: false,
      revenueConfig: {
        data: [
          {
            name: '广东省',
            value: 7599.6
          },
          {
            name: '江苏省',
            value: 5647.0
          },
          {
            name: '浙江省',
            value: 5314.0
          },
          {
            name: '上海市',
            value: 4731.5
          },
          {
            name: '山东省',
            value: 4300.3
          },
          {
            name: '北京市',
            value: 3254.4
          },
          {
            name: '四川省',
            value: 2577.8
          },
          {
            name: '河北省',
            value: 2550.8
          },
          {
            name: '河南省',
            value: 2446.9
          },
          {
            name: '福建省',
            value: 2042.8
          },
          {
            name: '湖北省',
            value: 1999.9
          },
          {
            name: '安徽省',
            value: 1956.4
          },
        ],
        showValue: true,
        unit: "亿元"
      }
    }
  }
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

.header {
  width: 100%;
  height: 7%;
  display: flex;
  .left {
    width: 22%;
    height: 100%;
  }
  .middleContainer {
    width: 56%;
    height: 100%;
    .text {
      margin-top: 1vh;
      position: relative;
      top: 1vh;
      width: 100%;
      text-align: center;
      font-size: 28px;
      color: #0ff;
    }
    .middle {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 22%;
    height: 100%;
  }
}
.main {
  margin-top: 2vh;
  margin-left: 1vw;
  height: 91%;
  width: 100%;
  .revenue {
    width: 20%;
    height: 100%;
    display: flex;
    .title {
      text-align: center;
      margin-top: 2vh;
    }
    .chart {
      margin-top: 5vh;
      margin-left: 10%;
      height: 85%;
      width: 80%;
      font-size: 22px;
    }
  }
}
</style>
