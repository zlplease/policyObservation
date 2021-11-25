import Vue from "vue";
import Router from "vue-router";
import BigData1 from "@/views/BigData1";
import home from "@/views/home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/BigData1",
      name: "BigData1",
      component: BigData1
    }
  ]
});
