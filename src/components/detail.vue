<template>
  <div class="detail">
    <div class="timeShow">
      <div class="timeChoose">
        <a-radio-group :value="date" @change="handleDateChange">
          <a-radio-button value="今日"> 今日 </a-radio-button>
          <a-radio-button value="昨日"> 昨日 </a-radio-button>
          <a-radio-button value="最近7日"> 最近7日 </a-radio-button>
        </a-radio-group>
        <a-range-picker @change="onChange" />
      </div>
      <div class="rankTable">
        <a-table
          :columns="columns"
          :data-source="rank"
          :pagination="{ pageSize: 8 }"
          size="small"
        >
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rank: {
      type: Array,
      required: true,
    },
  },
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
          dataIndex: "policyNum",
          key: "policyNum",
        },
        {
          title: "政策总数",
          key: "total",
          dataIndex: "total",
        },
      ],
      // rank: [
      //   {
      //     key: '1',
      //     rank: 1,
      //     province: '北京',
      //     newPolicy: 316816,
      //     total: 8785613
      //   },
      //   {
      //     key: '2',
      //     rank: 2,
      //     province: '浙江',
      //     newPolicy: 212518,
      //     total: 3878510
      //   },
      //   {
      //     key: '3',
      //     rank: 3,
      //     province: '福建',
      //     newPolicy: 148261,
      //     total: 2719411
      //   },
      //   {
      //     key: '4',
      //     rank: 4,
      //     province: '广东',
      //     newPolicy: 112561,
      //     total: 2419311
      //   },
      //   {
      //     key: '5',
      //     rank: 5,
      //     province: '上海',
      //     newPolicy: 81847,
      //     total: 194739
      //   },
      //   {
      //     key: '6',
      //     rank: 6,
      //     province: '河北',
      //     newPolicy: 71852,
      //     total: 183196
      //   },
      //   {
      //     key: '7',
      //     rank: 7,
      //     province: '河南',
      //     newPolicy: 60913,
      //     total: 163126
      //   },
      //   {
      //     key: '8',
      //     rank: 8,
      //     province: '北京',
      //     newPolicy: 50913,
      //     total: 143116
      //   },
      //   {
      //     key: '9',
      //     rank: 9,
      //     province: '北京',
      //     newPolicy: 41256,
      //     total: 87856
      //   },
      //   {
      //     key: '10',
      //     rank: 10,
      //     province: '北京',
      //     newPolicy: 1256,
      //     total: 87856
      //   },
      // ]
    };
  },
  methods: {
    onChange(date, dateString) {
      var date = {
        startTime: dateString[0],
        endTime: dateString[1],
      };
      this.$emit("changeDate", date);
    },
    handleDateChange(e) {
      this.date = e.target.value;
      console.log(this.date);
      var day1 = new Date();
      var date = {};
      var nowDate = new Date();
      nowDate.setTime(nowDate.getTime());
      var nowDate =
        nowDate.getFullYear() +
        "-" +
        (nowDate.getMonth() + 1) +
        "-" +
        nowDate.getDate();
      if (this.date == "昨日") {
        day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
      } else if (this.date == "今日") {
        day1.setTime(day1.getTime());
      } else {
        day1.setTime(day1.getTime() - 7 * 24 * 60 * 60 * 1000);
      }
      var date1 =
        day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();
      if (this.date == "今日" || this.date == "昨日") {
        date = {
          startTime: date1,
          endTime: date1,
        };
      } else {
        date = {
          startTime: date1,
          endTime: nowDate,
        };
      }
      this.$emit("changeDate", date);
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
  height: 400px;
  position: relative;
}

.ant-table-thead {
  height: 30px !important;
}

.ant-pagination {
  position: absolute;
  bottom: 0;
}
</style>