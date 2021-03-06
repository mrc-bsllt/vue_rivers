import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/rivers",
    name: "Rivers",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/rivers/:slug",
    name: "River",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/add-river",
    name: "AddRiver",
    component: () => import("../views/Home.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
