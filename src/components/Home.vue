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
    <div class="hotPoint">
      <div class="title">
        <img src="../assets/hot.png" class="icon" />
        <div class="name">政策热点</div>
      </div>
      <div class="policyList">
        <a-carousel autoplay vertical>
          <div v-for="(obj, key) in policies" :key="key" class="list">
            <div class="place">{{obj.place}}</div>
            <div class="title1">{{obj.title}}</div>
            <div class="about">{{obj.about}}</div>
            <div class="content">{{obj.content}}</div>
          </div>
        </a-carousel>
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
    dataDetail,
  },
  data() {
    return {
      infoShow: false,
      infoX: 0,
      infoY: 0,
      nowProvince: "",
      policies: [
        {
          place: "【福州】",
          about: "软工",
          title: '软工好苦',
          content:
            "说实话学前端以来第一次做出这么丑的玩意，也是第一次在项目里写这么多奇怪的js，之前都是在写业务逻辑，游戏逻辑完全没有接触过，比想象中的复杂得多，接下来还要做另一门课的坦克大战，实时刷新的前提下想必会比现在还麻烦。本来我是很喜欢做动画、写交互的，但是遇到了许多问题。首先是监听请求已经浪费了过多的运存，导致游戏有些卡卡的了，在此基础上加上动画可能会导致运存过大强制结束等等。然后是由于本人实在不熟悉微信小程序的开发环境，没有dom，更没有jQuery，只能调用微信小程序的方法animation或者用CSS@keyframe动画，经过3天国庆30小时爆肝，现在已经看见这个界面就有些难受",
        },
        {
          place: "【上海】",
          about: '住房',
          title: '房价好贵',
          content: "买不起买不起买不起买不起买不起买不起买不起买不起买不起买不起买不起买不起,wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买wzy给我买"
        },
      ],
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
      margin-bottom: 32px;
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
    width: 90%;
    display: flex;
    .chineseMap {
      width: 50%;
    }
    .detail {
      margin-left: 32px;
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

.hotPoint {
  margin: 0 5%;
  margin-top: 32px;
  .title {
    display: flex;
    align-items: center;
    .icon {
      width: 28px;
      height: 28px;
    }
    .name {
      padding-left: 12px;
      font-size: 16px;
      font-weight: bold;
    }
  }
}

.policyList {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  .list {
    width: 1000px;
    height: 200px;
    border-radius: 12px;
    background-color: #ececec;
    padding: 8px 5px;
    .place {
      color: #417ce9;
      font-weight: bold;
      font-size: 24px;
    }
    .title1 {
      text-align: center;
      font-size: 18px;
      color: #969696;
      font-weight: 700;
    }
    .about {
      text-align: center;
      color: #969696;
    }
    .content {
      font-size: 14px;
    }
  }
}

.ant-carousel >>> .slick-slide {
  height: 200px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
