export default {
	name: 'FormInput',
	props: {
		title: {
			type: String,
		},
		icon: {
			type: String,
		},
		type: {
			type: String,
		},
		info: {
			type: String,
		},
		inputIndex: {
			type: Number,
		},
	},
	data() {
		return {
			inputContent: '',
		};
	},

	methods: {
		onInput() {
			// create object with 2 properties to take value for changed input
			let inputInfo = {
				index: this.inputIndex,
				content: this.inputContent,
			};
			// emit 'onInput' to parent
			this.$emit(`onInput`, inputInfo);
		},
	},
};
