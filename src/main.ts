import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import headerItem from "./compornents/parts/headerItem.vue";

Vue.config.productionTip = false;
Vue.component('headerItem', headerItem);
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
