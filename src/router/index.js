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
    path: "/city",
    name: "City",
    component: () => import("@/views/City"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("@/views/Detail"),
  },
];

const scrollBehavior =  (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

export default router;
