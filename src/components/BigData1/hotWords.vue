<template>
  <div class="allContainer">
    <div class="topContainer">
      <dv-border-box-7 :color="['rgb(16,11,56)','#77dff5']"
                       class="acitivityContainer">
        <div class="acitivity">
          <div class="title">{{provinces.province}}政策活跃度</div>
          <div class="title">共计 <div class="number">{{provinces.newPolicy}}</div> 个政策文件
          </div>
          <dv-water-level-pond class="water"
                               :config="provinces"
                               style="width:200px;height:200px" />
        </div>
      </dv-border-box-7>
      <dv-border-box-7 :color="['rgb(16,11,56)','#77dff5']"
                       class="totalContainer">
        <dv-scroll-board :config="total" />
      </dv-border-box-7>
      <dv-border-box-7 :color="['rgb(16,11,56)','#77dff5']"
                       class="proportionContainer">
        <div class="proportion">
          <div class="title">福建热词分布Top5</div>
          <dv-active-ring-chart :config="proportion"
                                style="width:300px;height:300px" />
        </div>
      </dv-border-box-7>
    </div>
    <div class="bottomContainer">
      <dv-border-box-8 v-for="i in index"
                       :key="i"
                       class="border">
        <div class="title">
          <div class="left">
            {{proportion.data[i].name}}
          </div>
          <div class="right">
            0{{i+1}}
          </div>
        </div>
        <dv-charts class="circle"
                   :option="items[i]" />
        <div class="bottom">
          <div class="numberContainer">
            <div class="title">
              共计出现
            </div>
            <div class="number">
              {{proportion.data[i].value}}
            </div>
            <div class="char">
              次
            </div>
          </div>
        </div>
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
export default {
  name: 'acitivity',
  data () {
    return {
      hotWordsData: [
        {
          province: '福建',
          hotWords: [
            {
              name: '进口税收',
              value: 89
            },
            {
              name: '推动产业转型',
              value: 72
            },
            {
              name: '推动服务业发展',
              value: 53
            },
            {
              name: '新能源汽车',
              value: 29
            },
            {
              name: '出产咸鱼',
              value: 18
            },
          ],
          hotWordsitems: [30, 25, 20, 15, 10],
        }
      ],
      index: [0, 1, 2, 3, 4],
      provinces: {
        province: '广东',
        newPolicy: '998,876',
        data: [42],
        shape: 'round'
      },
      total: {
        header: ['词汇', '全国出现次数', '广东省出现次数'],
        data: [
          ['社会保险', '1238292', '9313'],
          ['环保', '28702312', '1731'],
          ['拆迁', '1468156', '3612'],
          ['招商引资', '123594', '12589'],
          ['事业单位改制', '124893', '12369'],
          ['残疾人优惠', '123458', '1443'],
          ['治理雾霾', '1261', '25'],
          ['降低税款', '123671', '12622']
        ],
        index: true,
        columnWidth: [50],
        align: ['center']
      },
      proportion: {
        data: [
          {
            name: '疫情防控',
            value: 120
          },
          {
            name: '促进消费',
            value: 80
          },
          {
            name: '药价下调',
            value: 78
          },
          {
            name: '精准扶贫',
            value: 66
          },
          {
            name: '新能源',
            value: 55
          },
        ],
        lineWidth: 10,
      },
      items: [{
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 5,
            data: [
              { name: 'itemA', value: 30, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '频率占比{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 20
              }
            }
          }
        ]
      }, {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 5,
            data: [
              { name: 'itemA', value: 20, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '频率占比{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 20
              }
            }
          }
        ]
      }, {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 5,
            data: [
              { name: 'itemA', value: 20, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '频率占比{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 20
              }
            }
          }
        ]
      }, {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 5,
            data: [
              { name: 'itemA', value: 17, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '频率占比{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 20
              }
            }
          }
        ]
      }, {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 5,
            data: [
              { name: 'itemA', value: 15, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '频率占比{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 20
              }
            }
          }
        ]
      }],
    };
  },

  components: {},

  methods: {
    change: function () {
      this.provinces.province = '福建';
      this.provinces.newPolicy = '112,413';
      this.provinces.data = [15];
      this.proportion.data = this.hotWordsData[0].hotWords;
      for (let i = 0; i < 5; i++) {
        this.items[i].series[0].data[0].value = this.hotWordsData[0].hotWordsitems[i];
        this.items[i] = { ...this.items[i] };
      }

      this.proportion = { ...this.proportion }
      this.items = { ...this.items }
      this.provinces = { ...this.provinces }
    }
  },

  created: function () {
    setTimeout(this.change, 2000);
  },
}

</script>
<style lang='scss' scoped>
.allContainer {
  width: 100%;
  height: 100%;
  .topContainer {
    margin-top: 1%;
    width: 100%;
    height: 40%;
    display: flex;
    .acitivityContainer {
      width: 27%;
      height: 100%;
      .acitivity {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          font-size: 20px;
          height: 15%;
          .number {
            display: inline-block;
            font-size: 24px;
            color: #3addc1;
          }
        }
      }
    }
    .totalContainer {
      width: 45%;
      height: 100%;
      margin-left: 1%;
    }
    .proportionContainer {
      margin-left: 1%;
      width: 25%;
      height: 100%;
      .proportion {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          text-align: center;
          font-size: 20px;
        }
      }
    }
  }
  .bottomContainer {
    height: 60%;
    width: 100%;
    display: flex;
    .border {
      margin-top: 1%;
      margin-right: 1%;
      flex: 1;
      height: 72.5%;
      .title {
        height: 20%;
        display: flex;
        justify-content: space-between;
        .left {
          font-size: 20px;
          font-weight: bold;
          position: relative;
          left: 1vw;
          top: 3vh;
        }
        .right {
          font-size: 35px;
          color: #3addc1;
          font-weight: bold;
          position: relative;
          right: 1vw;
          top: 2vh;
        }
      }
      .circle {
        height: 60%;
      }
      .bottom {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        .numberContainer {
          .title {
            display: inline-block;
            font-size: 20px;
          }
          .number {
            display: inline-block;
            color: #3addc1;
            font-size: 30px;
          }
          .char {
            font-size: 20px;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>