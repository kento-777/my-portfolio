import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import headerItem from "./components/parts/headerItem.vue";
import footerItem from "./components/parts/footerItem.vue";
import  Slide  from "vue-burger-menu";
import  VueTyper  from "vue-typer";

Vue.config.productionTip = false;
Vue.component("headerItem", headerItem);
Vue.component("footerItem", footerItem);
Vue.component("slide", Slide);
Vue.component("vue-typer", VueTyper);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
