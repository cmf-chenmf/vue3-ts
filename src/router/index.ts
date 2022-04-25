import { createRouter, createWebHistory } from 'vue-router';

const App = () => import("@/App.vue");
const Layout = () => import("@/views/layout/Layout.vue");
const Login = () => import("@/views/Login.vue")

const routes = [
	{
		path: '/',
		name: "App",
		component: App,
		redirect:'layout'
	},
	{
		path:'/layout',
		name:"Layout",
		component:Layout
	},
	{
		path:'/login',
		name:'Login',
		component:Login
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router