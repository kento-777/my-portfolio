import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Top from "../compornents/Top.vue";
import Skills from "../compornents/Skills.vue";
import About from "../compornents/About.vue";
import Works from "../compornents/Works.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Top,
  },
  {
    path: "/skills",
    component: Skills,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/works",
    component: Works,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
