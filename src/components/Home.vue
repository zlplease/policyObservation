<template>
  <div class="Home">
    <div class="swiper">
      <div class="slogan">让每个人成为政策的见证者</div>
      <a-input-search placeholder="请输入关键词" style="width: 320px" />
    </div>
    <div class="dataCenter">
      <div class="headline">
        <img src="../assets/data.png" class="icon" />
        <div class="name">政策数据中心</div>
      </div>
      <div class="center">
        <chineseMap
          @province_selected="selectProvince"
          @province_hovered="hoverProvince"
          @coordinate="coordinate"
          @leave="leave"
          class="chineseMap"
        >
        </chineseMap>
        <dataDetail class="detail"></dataDetail>
      </div>
    </div>
    <div
      v-if="this.infoShow"
      class="provinceInfo"
      :style="{ top: infoY + 'px', left: infoX + 'px' }"
    >
      <div class="provinceName">
        {{ nowProvince }}
        <div class="decoration"></div>
      </div>
      <div class="info">
        <div class="title">
          政策总数
          <div class="count">1023441</div>
        </div>
      </div>
      <div class="info">
        新增政策数
        <div class="count">12345</div>
      </div>
    </div>
  </div>
</template>

<script>
import chineseMap from "./map.vue";
import dataDetail from "./detail.vue";
export default {
  name: "HelloWorld",
  components: {
    chineseMap,
    dataDetail
  },
  data() {
    return {
      infoShow: false,
      infoX: 0,
      infoY: 0,
      nowProvince: "",
    };
  },
  methods: {
    selectProvince(data) {
      // console.log(data)
    },
    hoverProvince(data) {
      this.infoShow = true;
      this.nowProvince = data;
    },
    coordinate(x, y) {
      this.infoX = x + 20;
      this.infoY = y + 20;
    },
    leave() {
      this.infoShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.Home {
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 24%;
    background-image: url("../assets/bg.jpg");
    background-size: 100% 128%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .slogan {
      font-weight: bold;
      // color: white;
      font-size: 18px;
      margin-bottom: 8px;
    }
  }

  .dataCenter {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .headline {
      display: flex;

      .icon {
        width: 24px;
        height: 24px;
      }

      .name {
        padding-left: 12px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .center {
    width: 80%;
    display: flex;
    .chineseMap {
      width: 50%;
    }
  }

  .provinceInfo {
    width: 140px;
    height: 120px;
    background-color: #ffffff;
    border-radius: 4px;
    position: absolute;
    border: 0.5px solid #417ce9;
    padding: 2px 12px;
    color: #417ce9;
    font-size: 12px;

    .provinceName {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: bold;
      .decoration {
        margin-top: 4px;
        width: 96px;
        height: 1px;
        background-color: #417ce9;
      }
    }

    .info {
      font-size: 12px;
      display: flex;
      flex-direction: column;

      .count {
        color: #eb6365;
        font-weight: bold;
      }
    }
  }
}
</style>
