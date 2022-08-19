export default {
	name: 'BoxChat',
	data() {
		return {
			appName: 'Wichat',
			newText: '',
			messengerList: [],
		};
	},
	methods: {
		send() {
			// check noi dung co phai la empty hay khong thi moi push
			if (this.newText != '') {
				this.messengerList.push(this.newText);
				this.newText = '';
			} else this.newText = '';
		},
	},
};
