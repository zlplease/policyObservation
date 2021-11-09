import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import BigData1 from "@/views/BigData1";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/BigData1",
      name: "BigData1",
      component: BigData1
    }
  ]
});
