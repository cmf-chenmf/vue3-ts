import { createRouter, createWebHistory } from "vue-router";

//页面布局
const LayoutView = () => import("@/views/LayoutView.vue");
//登录页
const Login = () => import("@/views/LoginView.vue");

const IndexView = () => import("@/views/index/IndexView.vue");
const EchartsView = () => import("@/views/echarts/EchartsView.vue");
const ResultView = () => import("@/views/result/ResultView.vue");
const FormView = () => import("@/views/form/FormView.vue");
const SuccessView = () => import("@/views/result/SuccessView.vue");
const FailView = () => import("@/views/result/FailView.vue");

const routes = [
  {
    path: "/",
    name: "App",
    component: LayoutView,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: IndexView,
      }, {
        path: "echarts",
        name: "Echarts",
        component: EchartsView,
      }, {
        path: "form",
        name: "Form",
        component: FormView,
      }, {
        path: "result",
        name: "Result",
        component: ResultView,
        children: [
          {
            path: "success",
            name: "Success",
            component: SuccessView,
          }, {
            path: "fail",
            name: "FailView",
            component: FailView,
          },
        ]
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
