import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../screen/HomePage/HomePage.vue';
import LoginPage from '../screen/LoginPage/LoginPage.vue';
import SignupPage from '../screen/SignupPage/SignupPage.vue';
import ChatLobby from '../screen/ChatLobby/ChatLobby.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginPage,
	},
	{
		path: '/register',
		name: 'Signup',
		component: SignupPage,
	},
	{
		path: '/lobby',
		name: 'Lobby',
		component: ChatLobby,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
