export default {
	name: 'RoomLists',
	props: {
		roomheader: {
			type: String,
		},
		newroom: {
			type: String,
		},
		lists: {
			type: Array,
		},
	},
	data() {
		return {
			newRoom: '',
		};
	},
	methods: {
		addNewRoom() {
			// alert(typeof this.newRoom);
			this.$emit('addNewRoom', this.newRoom);
			this.newRoom = '';
		},
	},
};
