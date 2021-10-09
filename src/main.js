import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAgile from 'vue-agile';

// Tailwind
import "tailwindcss/tailwind.css";

// Axios
import AxiosPlugin from "./plugin/AxiosPlugin.js";
Vue.use(AxiosPlugin);

// Vue agile
Vue.use(VueAgile)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
