import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
//Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firestorePlugin } from "vuefire";
import VueFirestore from "vue-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ2BvmkI2O9lzIUYPqRrs-KFgqs1wlAEY",
  authDomain: "healthcalculators-adac3.firebaseapp.com",
  projectId: "healthcalculators-adac3",
  storageBucket: "healthcalculators-adac3.appspot.com",
  messagingSenderId: "447501322804",
  appId: "1:447501322804:web:9f62a12025b8af3afb1861",
  measurementId: "G-GEV1VL2FHB"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});
Vue.use(VueFirestore);

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

export const db = firebase.firestore();
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
