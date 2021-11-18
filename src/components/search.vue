<template>
  <div class="search">
    <div class="top">
      <div class="title">政策查询</div>
      <div class="area">
        <div class="name">地区范围:</div>
        <div>
          <a-select class="select"
                    default-value="福建"
                    style="width: 120px"
                    @change="handleChange">
            <a-select-option :value="item"
                             v-for="item in province"
                             :key="item.code">
              {{ item }}
            </a-select-option>
          </a-select>
        </div>
        <div>
          <a-select class="select"
                    :default-value="city"
                    style="width: 120px"
                    @change="handleChange">
            <a-select-option :value="item"
                             v-for="item in city"
                             :key="item.code">
              {{ item }}
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div class="source">
        <div class="name">信息来源:</div>
        <div class="from"
             :class="{ selected: selectFrom == item }"
             v-for="(item, key) in source"
             :key="key"
             @click="choose(item)">
          {{ item }}
        </div>
      </div>
      <div class="industries">
        <div class="name">相关产业:</div>
        <div class="industry"
             :class="{ selected: selectIndustry == item }"
             v-for="item in industry"
             :key="item.key"
             @click="choose1(item)">
          {{ item }}
        </div>
      </div>
      <div class="searchInput">
        <div class="title">关键词</div>
        <input placeholder="请输入关键词" />
        <div class="btn">搜素</div>
      </div>
    </div>
    <div class="bottom">
      <a-table :columns="columns"
               :data-source="dataInfo"
               :pagination="{ pageSize: 10 }"
               :scroll="{ y: 240 }" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      province: ["北京", "上海", "河北", "辽宁", "吉林", "福建"],
      city: ["福州", "厦门", "莆田"],
      source: ["全部", "福建省人民政府", "福建省发改委", "福建省科学技术厅"],
      industry: ["全部", "互联网", "新能源", "生命科学", "节能环保"],
      selectFrom: "全部",
      selectIndustry: "全部",
      columns: [
        {
          title: "政策名称",
          dataIndex: "name",
          width: 450,
        },
        {
          title: "信息来源",
          dataIndex: "source",
          width: 300,
        },
        {
          title: "发布日期",
          dataIndex: "date",
        },
      ],
      dataInfo: [
        {
          key: 0,
          name: '进口货物提前报关奖励',
          source: '福州市商务局',
          date: '2021.11.01'
        },
        {
          key: 1,
          name: 'VR产业集聚发展补助',
          source: '福州市经济和信息化委员会',
          date: '2021.11.02'
        },
        {
          key: 2,
          name: '工业重点项目',
          source: '福州市工业和信息化局',
          date: '2021.11.12'
        },
        {
          key: 3,
          name: '优势、示范企业奖励',
          source: '福州市科学技术局',
          date: '2021.11.02'
        },
        {
          key: 4,
          name: '企业技改项目完工投产奖励',
          source: '福州市工业和信息化局',
          date: '2021.11.03'
        },
        {
          key: 5,
          name: '疫情防控重点保障物资生产企业',
          source: '福州市经济和信息化委员会',
          date: '2021.11.04'
        },
        {
          key: 6,
          name: '民营企业创建高水平创新平台',
          source: '福州市发展和改革委员会',
          date: '2021.11.05'
        },
        {
          key: 7,
          name: '进口货物提前报关奖励',
          source: '福州市科学技术局',
          date: '2021.11.04'
        },
        {
          key: 8,
          name: '进口货物提前报关奖励',
          source: '福州市商务局',
          date: '2021.11.05'
        },
        {
          key: 9,
          name: '进口货物提前报关奖励',
          source: '福州市商务局',
          date: '2021.11.06'
        },
        {
          key: 10,
          name: '进口货物提前报关奖励',
          source: '福州市商务局',
          date: '2021.11.08'
        },
      ]
    };
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`);
    },
    choose (value) {
      this.selectFrom = value;
    },
    choose1 (value) {
      this.selectIndustry = value;
    },
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
</style>