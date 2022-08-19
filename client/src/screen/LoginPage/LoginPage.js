import FomrInput from '../../components/FormInput/FormInput.vue';
import Constant from '@/constant/Constant'; // import file contain variables
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

export default {
	name: 'LoginPage',
	components: {
		FomrInput,
	},
	data() {
		return {
			routes: [{ name: 'Lobby', url: '/lobby' }],
			inputInfos: [
				Constant.REGISTER_INFOS[0],
				Constant.REGISTER_INFOS[1],
			],
			userName: '',
			passWord: '',
		};
	},
	computed: {
		// enable login button when input field is not empty
		isDisable() {
			return !this.userName || !this.passWord;
		},
	},
	methods: {
		onShow() {
			// if type = text -> convert type = password and vice_versa
			this.inputInfos[Constant.PASSWORD_INDEX].type =
				this.inputInfos[Constant.PASSWORD_INDEX].type === 'text'
					? 'password'
					: 'text';
		},
		async onLogin() {
			try {
				let response = await axios.post(baseUrl + '/login', {
					username: this.userName,
					password: this.passWord,
				});
				console.log({ response });
				// check status from response axios
				if (response.status === 200) {
					alert('Login succesfully');
					this.$router.push({ name: 'Lobby' });
				}
				// console.log(response);
			} catch (error) {
				alert('Login failed !');
				console.log(error);
			}
		},

		/**
		 *
		 * @param {Object} inputValue is a object contain index, input content
		 */
		// lay ra value sau khi nhap vao moi o input
		inputSubmit(inputValue) {
			console.log(inputValue);
			if (inputValue.index === 0) {
				this.userName = inputValue.content;
			}
			if (inputValue.index === 1) {
				this.passWord = inputValue.content;
			}
			console.log({ username: this.userName, password: this.passWord });
		},
	},
};
