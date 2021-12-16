import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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