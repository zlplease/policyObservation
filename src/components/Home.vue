<template>
  <div class="Home">
    <div class="swiper">
      <div class="slogan">让每个人成为政策的见证者</div>
      <a-input-search placeholder="请输入关键词"
                      style="width: 320px"
                      enter-button
                      @search="onSearch" />
    </div>
    <div class="dataCenter">
      <div class="headline">
        <img src="../assets/data.png"
             class="icon" />
        <div class="name">政策数据中心</div>
      </div>
      <div class="center">
        <chineseMap @province_selected="selectProvince"
                    @province_hovered="hoverProvince"
                    @coordinate="coordinate"
                    @leave="leave"
                    class="chineseMap"
                    :provinceInfo="province">
        </chineseMap>
        <dataDetail :rank="province"
                    :spinning="spinning"
                    @changeDate="changeDate"
                    class="detail"></dataDetail>
      </div>
    </div>
    <div class="hotPoint">
      <div class="title">
        <img src="../assets/hot.png"
             class="icon" />
        <div class="name">政策热点</div>
      </div>
      <div class="policyList">
        <a-carousel autoplay
                    vertical>
          <div v-for="(obj, key) in policies"
               :key="key"
               class="list">
            <div class="place">{{ obj.place }}</div>
            <div class="title1">{{ obj.title }}</div>
            <div class="about">{{ obj.about }}</div>
            <div class="content">{{ obj.content }}</div>
          </div>
        </a-carousel>
      </div>
    </div>
    <div v-if="this.infoShow"
         class="provinceInfo"
         :style="{ top: infoY + 'px', left: infoX + 'px' }">
      <div class="provinceName">
        {{ nowProvince }}
        <div class="decoration"></div>
      </div>
      <div class="info">
        <div class="title">
          政策总数
          <div class="count">{{ totalNumber }}</div>
        </div>
      </div>
      <div class="info">
        新增政策数
        <div class="count">{{ newAdd }}</div>
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
  data () {
    return {
      infoShow: false,
      infoX: 0,
      infoY: 0,
      nowProvince: "",
      totalNumber: 0,
      newAdd: 0,
      policies: [
        {
          place: "【北京】",
          about: "运动会",
          title: "北京2022年冬残奥会迎来倒计时100天",
          content:
            `　在北京冬残奥会开幕倒计时100天之际，11月24日晚，北京2022年冬残奥会倒计时100天主题活动在国家游泳中心“冰立方”举行，北京2022年冬残奥会火炬接力计划对外发布。北京市委书记、北京冬奥组委主席蔡奇致辞，国际残奥委会主席帕森斯以视频形式致辞。国家体育总局局长、中国奥委会主席、北京冬奥组委执行主席苟仲文，北京市委副书记、市长、北京冬奥组委执行主席陈吉宁，河北省委副书记、副省长、代省长王正谱，中国残联主席、北京冬奥组委执行主席张海迪出席。

　　蔡奇代表北京冬奥组委向一直以来关心支持北京冬残奥会筹办工作的各界朋友表示感谢。他指出，北京2022年冬奥会和冬残奥会是我国重要历史节点的重大标志性活动。中国政府高度重视筹办工作，习近平主席先后作出一系列重要指示，为我们顺利推进各项工作提供了根本遵循。在中国政府坚强领导下，我们全面落实绿色、共享、开放、廉洁的办奥理念，坚持两个奥运同步规划、同步实施，认真落实国际残奥委会战略计划，有序推进冬残奥会筹办任务，竞赛场馆全部完工，无障碍设施建设同步完成，发布了冬残奥会会徽、吉祥物、火炬，制定了赛时防疫手册，顺利举行冬残奥测试赛，冬残奥会各项赛事准备工作已基本就绪。同时，我们以冬残奥筹办为契机，进一步激发残疾人参与冬季运动的热情，推动残疾人事业发展，共同建设更加幸福美好的生活。

　　蔡奇指出，再过100天，北京冬残奥会将隆重开幕，全世界将再次见证残疾运动健儿顽强拼搏、超越自我的风采。我们将按照“简约、安全、精彩”的办赛要求，与国内外各方面密切合作，全力做好疫情防控和各项筹办工作，为世界奉献一届精彩、非凡、卓越的冬残奥会，为推动残奥运动发展、促进社会文明进步、构建人类命运共同体作出新的贡献。

　　帕森斯在视频致辞中说，很高兴看到目前的筹办进展，北京冬奥组委已做好准备，将会举办一届精彩盛会。国际残奥委会对北京2022年冬残奥会充满希望，期待越来越多的中国残疾人参与运动、参与冬季运动。中国在夏季残奥会上实力雄厚，相信在冬季残奥会上也将如此。感谢中国政府、北京冬奥组委，希望携手努力共同举办一届卓越的冬残奥会。
        `,
        },
        {
          place: "【北京】",
          about: "疫情",
          title: "截至11月24日24时全国新型冠状病毒肺炎疫情最新情况",
          content:
            `　　11月24日0-24时，31个省(自治区、直辖市)和新疆生产建设兵团报告新增确诊病例24例。其中境外输入病例22例(上海4例，广东4例，广西4例，云南3例，山东2例，陕西2例，吉林1例，福建1例，四川1例)；本土病例2例(均在云南德宏傣族景颇族自治州)。无新增死亡病例。新增疑似病例1例，为境外输入病例(在上海)。

　　当日新增治愈出院病例68例，解除医学观察的密切接触者3074人，重症病例较前一日增加1例。

　　境外输入现有确诊病例391例(其中重症病例3例)，现有疑似病例2例。累计确诊病例10082例，累计治愈出院病例9691例，无死亡病例。

　　截至11月24日24时，据31个省(自治区、直辖市)和新疆生产建设兵团报告，现有确诊病例914例(其中重症病例8例)，累计治愈出院病例93020例，累计死亡病例4636例，累计报告确诊病例98570例，现有疑似病例2例。累计追踪到密切接触者1310344人，尚在医学观察的密切接触者27693人。

　　31个省(自治区、直辖市)和新疆生产建设兵团报告新增无症状感染者22例(均为境外输入)；当日无转为确诊病例；当日解除医学观察17例(境外输入14例)；尚在医学观察的无症状感染者494例(境外输入368例)。

　　累计收到港澳台地区通报确诊病例29032例。其中，香港特别行政区12411例(出院12123例，死亡213例)，澳门特别行政区77例(出院77例)，台湾地区16544例(出院13742例，死亡848例)。`        },
      ],
      province: [],
      spinning: true,
    };
  },
  methods: {
    onSearch (value) {
      this.$emit('searchKeywords', value)
    },
    selectProvince (data) {
      // console.log(data)
    },
    hoverProvince (data) {
      this.infoShow = true;
      this.nowProvince = data;
      var p1 = data.slice(0, 3);
      var p2 = data.slice(0, 2);
      var province = this.province;
      for (var item of province) {
        if (p1 == item.province || p2 == item.province) {
          this.totalNumber = item.total;
          this.newAdd = item.policyNum;
        }
      }
    },
    coordinate (x, y) {
      this.infoX = x + 20;
      this.infoY = y + 20;
    },
    leave () {
      this.infoShow = false;
    },
    changeDate (date) {
      this.spinning = true;
      console.log(date);
      //todo a big  problem
      this.$axios({
        methods: "get",
        url: "http://39.103.169.155:8080/policy/rank",
        params: date,
      }).then((res) => {
        console.log(res.data.data);
        this.province = res.data.data;
        this.spinning = false;
      });
    },
  },
  mounted: function () {
    this.spinning = true;
    this.$axios({
      methods: "get",
      url: "http://39.103.169.155:8080/policy/rank",
      params: {
        endTime: "2021-11-24",
        startTime: "1900-01-01",
      },
    }).then((res) => {
      this.province = res.data.data;
      this.spinning = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.Home {
  width: 100%;
  // height: 80%;

  .swiper {
    width: 100%;
    height: 160px;
    background-image: url('../assets/bg.jpg');
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
  margin: 32px 5%;
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
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  .list {
    width: 800px;
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
