<template>
  <div class="detail">
    <div class="timeShow">
      <div class="timeChoose">
        <a-radio-group :value="date" @change="handleDateChange">
          <a-radio-button value="今日"> 今日 </a-radio-button>
          <a-radio-button value="昨日"> 昨日 </a-radio-button>
          <a-radio-button value="最近7日"> 最近7日 </a-radio-button>
        </a-radio-group>
        <a-date-picker @change="onChange" />
      </div>
      <div class="rankTable">
        <a-table :columns="columns" 
                 :data-source="rank"
                 :pagination="{ pageSize: 5 }"
                 :loading="loading"
                 size="small"
                 >
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      </div>
    </div>
    <div class="hot">
      <div class="title">政策热点</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "今日",
      columns: [
        {
          title: "排名",
          dataIndex: "rank",
          key: "rank",
        },
        {
          title: "省区",
          dataIndex: "province",
          key: "province",
        },
        {
          title: "新增政策数",
          dataIndex: "newPolicy",
          key: "newPolicy",
        },
        {
          title: "政策总数",
          key: "total",
          dataIndex: "total",
        },
      ],
      rank: [
        {
          key: '1',
          rank: 1,
          province: '北京',
          newPolicy: 1256,
          total: 87856
        },
        {
          key: '2',
          rank: 2,
          province: '北京',
          newPolicy: 1256,
          total: 87856
        },
        {
          key: '3',
          rank: 3,
          province: '北京',
          newPolicy: 1256,
          total: 87856
        },
        {
          key: '4',
          rank: 4,
          province: '北京',
          newPolicy: 1256,
          total: 87856
        },
        {
          key: '5',
          rank: 5,
          province: '北京',
          newPolicy: 1256,
          total: 87856
        },
        {
          key: '6',
          rank: 6,
          province: '北京',
          newPolicy: 1256,
          total: 87856
        },
      ]
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    handleDateChange(e) {
      this.date = e.target.value;
    },
  },
};
</script>
<style lang="scss" scoped>
.ant-radio-button-wrapper-checked {
  background-color: #417ce9;
  border: none;
  color: white;
}

.rankTable {
  margin-top: 12px;
}

.ant-table-thead {
  height: 30px !important;
}
</style>