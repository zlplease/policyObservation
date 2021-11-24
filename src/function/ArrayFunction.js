export default {
  install(Vue) {
    Array.prototype.deleteByString = function() {
      for (let i = 0; i < this.length; i++) {
        if (
          this[i].size > 390 ||
          this[i].word.indexOf("福建") + 1 ||
          this[i].word == "中心" ||
          this[i].word == "行政许可" ||
          this[i].word == "设区" ||
          this[i].word == "决定书" ||
          this[i].word == "委员会" ||
          this[i].word == "工业" ||
          this[i].word.indexOf("省") + 1 ||
          this[i].word.indexOf("邮箱") + 1 ||
          this[i].word.indexOf("活动") + 1 ||
          this[i].word.indexOf("企业") + 1 ||
          this[i].word.indexOf("投资") + 1 ||
          this[i].word.indexOf("平潭") + 1 ||
          this[i].word.indexOf("市") + 1 ||
          this[i].word.indexOf("厅") + 1 ||
          this[i].word.indexOf("政府") + 1
        ) {
          this.splice(i, 1);
          i--;
        }
      }
      let tempArr = [];
      for (let i = 0; i < this.length; i++) {
        if (
          this[i].word == "新能源" ||
          this[i].word == "住房" ||
          this[i].word == "医疗" ||
          this[i].word == "生态" ||
          this[i].word == "水土保持" ||
          this[i].word == "养老" ||
          this[i].word == "创业" ||
          this[i].word == "养殖" ||
          this[i].word == "疫情" ||
          this[i].word == "水利" ||
          this[i].word == "社会保障" ||
          this[i].word == "海洋渔业" ||
          this[i].word == "互联网" ||
          this[i].word == "高新技术" ||
          this[i].word == "旅游" ||
          this[i].word == "实业" ||
          this[i].word == "产学研" ||
          this[i].word == "文化产业" ||
          this[i].word == "数据" ||
          this[i].word == "信用"
        ) {
          if (this[i].word == "旅游") {
            this[i].word = "文化旅游";
          }
          if (this[i].word == "数据") {
            this[i].word = "大数据";
          }
          tempArr.push({
            word: this[i].word,
            size: this[i].size
          });
        }
      }
      /*
    this[i].word == "旅游" ||
    this[i].word == "金融" ||
    this[i].word == "金融" ||
    */
      for (let i = 0; i < 20; i++) {
        this[i] = tempArr[i];
      }
    };
  }
};
