import Vue from "vue";
import Router from "vue-router";
import BigData1 from "@/views/BigData1";
import home from "@/views/home";
import monthlyPost from "@/components/BigData1/monthlyPost";

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
    },
    {
      path: "/monthlyPost",
      name: "monthlyPost",
      component: monthlyPost
    }
  ]
});
