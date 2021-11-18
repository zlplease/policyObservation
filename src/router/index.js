import Vue from "vue";
import Router from "vue-router";
import search from "@/components/search";
import BigData1 from "@/views/BigData1";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "search",
      component: search
    },
    {
      path: "/Home",
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
