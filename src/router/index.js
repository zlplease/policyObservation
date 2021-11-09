import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import BigData1 from "@/views/BigData1";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/BigData1",
      name: "BigData1",
      component: BigData1
    }
  ]
});
