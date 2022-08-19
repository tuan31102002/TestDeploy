import RoomList from '../RoomList/RoomList.vue';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';
axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

export default {
	name: 'SideBar',
	components: { RoomList },
	data() {
		return {
			routes: [{ name: 'Home', url: '/' }],
			newRoom: '',
			Lists: [],
			title: 'Create new room',
		};
	},
	methods: {
		onSignout() {
			this.$router.push({ name: 'Home' });
		},
		async addNewroom(newname) {
			if (this.newRoom != newname) {
				this.Lists.push(newname);
			}
			try {
				let response = await axios.post(baseUrl + '/room', {
					roomName: newname,
				});
				console.log(response);
				console.log(`New room "${newname}" created`);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
