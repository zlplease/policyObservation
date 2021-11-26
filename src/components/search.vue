<template>
  <div class="search">
    <div class="top">
      <div class="title">政策查询</div>
      <div class="area">
        <div class="name">地区范围:</div>
        <div>
          <a-select class="select" :value="selectProvince" default-value="全部" style="width: 120px" @change="handleChange">
            <a-select-option :value="item" v-for="item in province" :key="item.code">
              {{ item }}
            </a-select-option>
          </a-select>
        </div>
        <div>
          <!-- <a-select class="select"
                    :default-value="city"
                    style="width: 120px"
                    @change="handleChange">
            <a-select-option :value="item"
                             v-for="item in city"
                             :key="item.code">
              {{ item }}
            </a-select-option>
          </a-select> -->
        </div>
      </div>
      <div class="source">
        <div class="name">信息来源:</div>
        <div class="from" :class="{ selected: selectFrom == item }" v-for="(item, key) in source" :key="key" @click="choose(item)">
          {{ item }}
        </div>
      </div>
      <!-- <div class="industries">
        <div class="name">相关产业:</div>
        <div class="industry"
             :class="{ selected: selectIndustry == item }"
             v-for="item in industry"
             :key="item.key"
             @click="choose1(item)">
          {{ item }}
        </div>
      </div> -->
      <div class="searchInput">
        <div class="title">关键词</div>
        <a-input placeholder="请输入关键词" v-model="keyword" value="keyword" @change="onChange" />
        <a-button class="btn" @click="search">搜素</a-button>
      </div>
    </div>
    <div class="bottom">
      <a-spin :spinning="searchLoading">
        <a-table :columns="columns" :data-source="dataInfo" rowKey="{record=>record.id}" :pagination="{ pageSize: 10 }" :scroll="{ y: 350 }">
          <div slot="action" slot-scope="text, record">
            <a-button type="primary" @click="jumpTo(record)">查看详情</a-button>
          </div>
        </a-table>
      </a-spin>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: "",
    },
  },
  data () {
    return {
      searchLoading: false,
      province: ["北京", "上海", "河北", "辽宁", "吉林", "福建"],
      //   city: ["福州", "厦门", "莆田"],
      source: ["全部", "福建省人民政府", "福建省发改委", "福建省科学技术厅"],
      industry: ["全部", "互联网", "新能源", "生命科学", "节能环保"],
      selectFrom: "全部",
      selectIndustry: "全部",
      selectProvince: "全部",
      columns: [
        {
          title: "政策名称",
          dataIndex: "title",
          width: 450,
        },
        {
          title: "信息来源",
          dataIndex: "publicUnit",
          width: 300,
        },
        {
          title: "发布日期",
          dataIndex: "publicTime",
        },
        {
          title: "操作",
          dataIndex: "operation",
          scopedSlots: { customRender: 'action' },
        }
      ],
      dataInfo: [],
      allDataInfo: [],
    };
  },
  methods: {
    jumpTo (e) {
      var url = e.url
      window.open(url, '_blank')
    },
    onChange (e) {
      console.log(e);
    },
    handleChange (value) {
      console.log(`selected ${value}`);
      this.selectProvince = value
      this.dataInfo = this.allDataInfo.filterByProvince(this.selectProvince).filterByString(this.selectFrom)
      this.source = ["全部"]
      this.choose('全部')
      for (let item of this.dataInfo) {
        if (this.source.length < 5 && !(this.source.indexOf(item.publicUnit) + 1) && !(item.publicUnit.indexOf('无发文机关') + 1)
          && item.publicUnit != ""
        ) {
          this.source.push(item.publicUnit)
        }
        else if (this.source.length >= 5) break;
      }
    },
    choose (value) {
      this.selectFrom = value;
      console.log(value)
      this.dataInfo = this.allDataInfo.filterByProvince(this.selectProvince).filterByString(this.selectFrom)
    },
    choose1 (value) {
      this.selectIndustry = value;
      console.log(value)
    },
    search () {
      this.searchLoading = true;
      var keyword = this.keyword;
      this.$axios
        .post(
          "/dpp-policy/search/title/ByWord",
          JSON.stringify({
            page: 1,
            size: 300,
            word: keyword,
          })
        )
        .then((res) => {
          var records = res.data.data.records;
          var dataInfo = [];
          this.source = ["全部"];
          this.province = ["全部"];
          this.selectFrom = "全部"
          this.selectProvince = "全部"
          for (var item of records) {
            var temp = {};
            temp["title"] = item.title;
            temp["publicUnit"] = item.publicUnit;
            temp["publicTime"] = item.publicTime;
            temp["url"] = item.url;
            temp["province"] = item.province
            dataInfo.push(temp);
            if (this.source.length < 5 && !(this.source.indexOf(item.publicUnit) + 1)) {
              this.source.push(item.publicUnit)
            }
            if (!(this.province.indexOf(item.province) + 1)) {
              this.province.push(item.province)
            }
          }
          this.dataInfo = dataInfo;
          this.allDataInfo = dataInfo
          this.searchLoading = false;
        });
    },
  },
  mounted: function () {
    console.log("hello");
    //this.search();
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .top {
    margin-top: 24px;
    width: 80%;
    background-color: white;
    border-radius: 12px;
    box-shadow: 41px 41px 82px #cfd1d6;
    padding: 10px 15px;

    .title {
      font-size: 18px;
      font-weight: bold;
      color: #417ce9;
    }

    .area,
    .source,
    .industries,
    .searchInput {
      display: flex;
      height: 48px;
      align-items: center;
    }

    .area {
      .select {
        margin: 0 12px;
      }
    }
  }

  .searchInput {
    border: 2px dotted #417ce9;
    padding: 6px 10px;

    .title {
      font-size: 14px;
      margin-right: 12px;
    }

    input {
      width: 240px;
      height: 32px;
      border: 0.1px solid #417ce9;
      outline: none;
      padding-left: 12px;
    }

    .btn {
      margin-left: 12px;
      width: 80px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      color: white;
      font-weight: bold;
      background-color: #417ce9;
      border-radius: 16px;
    }
  }

  .bottom {
    margin-top: 24px;
    width: 80%;
  }
}

.from,
.industry {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 20px;
  margin: 4px 6px;
  border-radius: 16px;
  border: 0.1px solid #cdcdcd;
}

.name {
  font-weight: 500;
  margin-right: 12px;
}

.selected {
  color: white;
  background-color: #417ce9;
}

.ant-table-tbody {
  height: 500px;
}
</style>
