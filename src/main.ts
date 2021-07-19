import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import HeaderItem from "./compornents/parts/HeaderItem.vue"

Vue.config.productionTip = false;
Vue.component('HeaderItem', HeaderItem)
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
