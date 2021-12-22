import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Firebase
// import { initializeApp } from "firebase/app";
// import *  as firebase from "firebase;
// import "firebase/firestore";
// import { firestorePlugin } from "vuefire";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6lV7YOjgy3u_EdFaPPZp2lqeFFYDB-oo",
  authDomain: "healthcalculators-45fea.firebaseapp.com",
  databaseURL: "https://healthcalculators-45fea-default-rtdb.firebaseio.com",
  projectId: "healthcalculators-45fea",
  storageBucket: "healthcalculators-45fea.appspot.com",
  messagingSenderId: "165126525528",
  appId: "1:165126525528:web:1a27a69e6ffd33f0caf02d",
  measurementId: "G-7M6J6VVN1F",
};

firebase.initializeApp(firebaseConfig);

// Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
