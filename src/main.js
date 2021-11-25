// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ArrayFunction from "./function/ArrayFunction";

Vue.config.productionTip = false;
import dataV from "@jiaminghi/data-view";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import vuescroll from "vuescroll"; //引入vuescroll
import "vuescroll/dist/vuescroll.css"; //引入vuescroll样式

import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL = "http://122.112.141.60:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.prototype.$axios = axios;

Vue.use(ArrayFunction);
Vue.use(VueAxios, axios);

Vue.use(vuescroll);
Vue.use(Antd);
Vue.use(dataV);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
