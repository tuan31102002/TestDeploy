export default {
	name: 'ChatHeader',
	data() {
		return {
			pageItems: [
				{ name: 'Login', url: '/login' },
				{ name: 'Signup', url: '/signup' },
			],
		};
	},
	methods: {
		//go to login and register page
		gotoPage(Name) {
			this.$router.push({ name: Name });
		},
	},
};
