import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// import Vue from "vue";
// import Router from "vue-router";
// import Dashboard from "../views/Dashboard.vue";
// import Projects from "../views/Projects.vue";
// import Team from "../views/Team.vue";

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       name: "dashboard",
//       component: Dashboard,
//     },
//     {
//       path: "/projects",
//       name: "projects",
//       component: Projects,
//     },
//     {
//       path: "/team",
//       name: "team",
//       component: Team,
//     },
//   ],
// });
