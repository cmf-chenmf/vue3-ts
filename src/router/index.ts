import {createRouter, createWebHistory} from "vue-router";

const Layout = () => import("@/views/Layout.vue");
const Login = () => import("@/views/Login.vue");

const Router1 = () => import("@/views/router1/Router.vue");
const Router2 = () => import("@/views/router2/Router.vue");

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/router1",
    children: [
      {
        path: "router1",
        name: "Router1",
        component: Router1
      },
      {
        path: "router2",
        name: "Router2",
        component: Router2
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
