import {createRouter, createWebHistory} from "vue-router";

//页面布局
const LayoutView = () => import("@/views/LayoutView.vue");
//登录页
const Login = () => import("@/views/Login.vue");


const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/layout-view",
    name: "LayoutView",
    component: LayoutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
