import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Top from "../components/Top.vue";
import Skills from "../components/Skills.vue";
import About from "../components/About.vue";
import Works from "../components/Works.vue";
import Contact from "../components/Contact.vue";

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
  {
    path: "/contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
