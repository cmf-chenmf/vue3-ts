import { createRouter, createWebHistory } from 'vue-router';

const App = () => import("@/App.vue")
const About = () => import("@/views/About.vue")
const routes = [
	{
		path: '/',
		name: "App",
		component: App,
		redirect:'about'
	},
	{
		path:'/about',
		name:"About",
		component:About
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router