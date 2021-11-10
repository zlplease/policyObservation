<template>
  <dv-border-box-8 :reverse="true"
                   class="revenue"
                   :dur=10>
    <div class="title">
      上半年财政收入排名
    </div>
    <dv-capsule-chart :config="revenueConfig"
                      class="chart" />
  </dv-border-box-8>
</template>

<script>
export default {
  name: 'revenue',
  data () {
    return {
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
          {
            name: '湖南省',
            value: 1713.7
          },
          {
            name: '江西省',
            value: 1708.2
          },
        ],
        showValue: true,
        unit: "亿元"
      },
    };
  },

  components: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
.revenue {
  width: 20%;
  height: 100%;
  display: flex;
  .title {
    text-align: center;
    margin-top: 2vh;
    font-size: 18px;
  }
  .chart {
    margin-top: 5vh;
    margin-left: 10%;
    height: 85%;
    width: 80%;
    font-size: 22px;
  }
}
</style>