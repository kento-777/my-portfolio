import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LikeNumber from "./compornents/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
