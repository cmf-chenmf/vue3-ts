import {createRouter, createWebHistory} from "vue-router";

//页面布局
const Layout = () => import("@/views/Layout.vue");
//登录页
const Login = () => import("@/views/Login.vue");

//菜单对应项
const Design = () => import("@/views/layouts/Design.vue");
const Lists = () => import("@/views/lists/Lists.vue");

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/layout",
    children: [
      {
        path: "layout",
        name: "Layouts",
        component: Design
      },
      {
        path: "lists",
        name: "Lists",
        component: Lists
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
