import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
