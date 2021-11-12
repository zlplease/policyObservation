import Vue from "vue";
import Router from "vue-router";
import search from "@/components/search";
import BigData1 from "@/views/BigData1";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "search",
      component: search
    },
    {
      path: "/BigData1",
      name: "BigData1",
      component: BigData1
    }
  ]
});
