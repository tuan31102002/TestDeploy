import FormInput from '@/components/FormInput/FormInput.vue';
import ImageSelector from '@/components/ImageSelector/ImageSelector.vue';
import Constant from '@/constant/Constant';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';
axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

export default {
	name: 'SignupPage',
	components: {
		FormInput,
		ImageSelector,
	},

	data() {
		return {
			routes: [{ name: 'Login', url: '/login' }],
			caption: 'Choose your waifu',
			inputInfos: Constant.REGISTER_INFOS,
			invalid: true,
			imagePreview: '',
			images: Constant.AVATAR_IMAGES,
		};
	},
	methods: {
		displaySubmit() {
			this.invalid = !this.invalid;
		},
		async onSubmit() {
			// check all input field'value is empty
			if (this.inputInfos[Constant.USERNAME_INDEX].info == '') {
				alert('Please insert username');
			} else if (this.inputInfos[Constant.PASSWORD_INDEX].info == '') {
				alert('Please insert password');
			} else if (
				this.inputInfos[Constant.REPASSWORD_INDEX].info == ''
			) {
				alert('Please insert re-password');
			} else if (this.inputInfos[Constant.TELEPHONE_INDEX].info == '') {
				alert('Please insert telephone');
			} else if (this.inputInfos[Constant.MAIL_INDEX].info == '') {
				alert('Please insert mail');
			} else if (this.inputInfos[Constant.DOB_INDEX].info == '') {
				alert('Please insert date of birth');
			}
			// If not empty, then check validation of every field
			else {
				if (
					this.inputInfos[Constant.USERNAME_INDEX].info.length < 4 ||
					this.inputInfos[Constant.USERNAME_INDEX].info.length > 16
				) {
					alert('Username length must contain 4-16 characters');
				} else if (
					this.inputInfos[Constant.PASSWORD_INDEX].info.length < 8 ||
					this.inputInfos[Constant.PASSWORD_INDEX].info.length > 16 ||
					this.inputInfos[Constant.PASSWORD_INDEX].info ===
						this.inputInfos[
							Constant.PASSWORD_INDEX
						].info.toLowerCase() ||
					this.inputInfos[Constant.PASSWORD_INDEX].info ===
						this.inputInfos[Constant.PASSWORD_INDEX].info.replace(
							/[^\w ]/,
							''
						)
				) {
					alert('Password invalid');
				} else if (
					this.inputInfos[Constant.REPASSWORD_INDEX].info !==
					this.inputInfos[Constant.PASSWORD_INDEX].info
				) {
					alert('Confirm password must match with password');
				} else if (
					!this.inputInfos[Constant.MAIL_INDEX].info.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					)
				) {
					alert('Mail invalid');
				} else {
					try {
						let response = await axios.post(baseUrl + '/register', {
							username: this.inputInfos[Constant.USERNAME_INDEX].info,
							password: this.inputInfos[Constant.PASSWORD_INDEX].info,
							rePassword:
								this.inputInfos[Constant.REPASSWORD_INDEX].info,
							telephone: this.inputInfos[Constant.TELEPHONE_INDEX].info,
							mail: this.inputInfos[Constant.MAIL_INDEX].info,
							date: this.inputInfos[Constant.DOB_INDEX].info,
						});
						console.log(response);
						if (response.status === 200) {
							alert('Register successfully !');
							this.$router.push('login');
						} else {
							throw new Error('register failed');
						}
					} catch (error) {
						if (error.response.status === 400) {
							alert('This username already exited, try new one');
						} else {
							alert('Register failed !!!!');
						}
						console.log(error);
					}
				}
			}
		},
		inputSubmit(inputValue) {
			// inputInfos already have data of every property of elements inside array
			this.inputInfos[inputValue.index].info = inputValue.content;
			// console.log(inputValue);
			console.log({
				username: this.inputInfos[Constant.USERNAME_INDEX].info,
				password: this.inputInfos[Constant.PASSWORD_INDEX].info,
				repassword: this.inputInfos[Constant.REPASSWORD_INDEX].info,
				telephone: this.inputInfos[Constant.TELEPHONE_INDEX].info,
				mail: this.inputInfos[Constant.MAIL_INDEX].info,
				date: this.inputInfos[Constant.DOB_INDEX].info,
			});
		},
	},
};
