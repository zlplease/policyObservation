<template>
  <dv-border-box-12 dur=10
                    class="totalContainerBorder">
    <div class="totalContainer">
      <div class="item">
        <div class="title">
          政策总数
        </div>
        <div class="flop">
          (万)
        </div>
      </div>
      <div class="item"
           v-for="i in index"
           :key="i">
        <div class="title">
          {{totalConfig[i].province}}
        </div>
        <div class="flop">
          <dv-digital-flop :config="totalConfig[i]"
                           style="width:160px;height:40px;" />
        </div>
      </div>
    </div>
  </dv-border-box-12>
</template>

<script>
export default {
  name: 'total',
  data () {
    return {
      index: [0, 1, 2, 3, 4, 5],
      totalConfig1: [
        {
          province: '广东',
          number: [8278023],
          content: '{nt}'
        },
        {
          province: '福建',
          number: [118024],
          content: '{nt}'
        },
        {
          province: '江苏',
          number: [821233],
          content: '{nt}'
        },
        {
          province: '四川',
          number: [61783],
          content: '{nt}'
        },
        {
          province: '湖北',
          number: [9071237],
          content: '{nt}'
        },
        {
          province: '西藏',
          number: [346],
          content: '{nt}'
        },
      ],
      totalConfig2: [
        {
          province: '安徽',
          number: [82723],
          content: '{nt}'
        },
        {
          province: '北京',
          number: [80231231],
          content: '{nt}'
        },
        {
          province: '台湾',
          number: [1212],
          content: '{nt}'
        },
        {
          province: '海南',
          number: [612783],
          content: '{nt}'
        },
        {
          province: '新疆维吾尔族自治区',
          number: [61],
          content: '{nt}'
        },
        {
          province: '宁夏回族自治区',
          number: [612],
          content: '{nt}'
        },
      ],
      totalConfig: [],
      totalFlag: 1
    };
  },

  methods: {
    changeTotalConfig () {
      this.totalFlag++;
      if (this.totalFlag >= 3) {
        this.totalFlag = this.totalFlag % 3;
        this.totalFlag++;
      }
      this.totalConfig = eval("this.totalConfig" + this.totalFlag)
    }
  },
  created: function () {
    this.totalConfig = this.totalConfig1;
    this.totalFlag = 1;
    setInterval(() => {
      this.changeTotalConfig()
    }, 2000)
  }
}

</script>
<style lang='scss' scoped>
.totalContainerBorder {
  height: 12%;
  .totalContainer {
    display: flex;
    height: 100%;
    align-items: center;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 80%;
      justify-content: center;
      align-items: center;
      border-left: 1.5px solid #061e5d;
      border-right: 1.5px solid #061e5d;
      .title {
        font-size: 18px;
      }
      .flop {
        font-size: 18px;
      }
    }
  }
}
</style>