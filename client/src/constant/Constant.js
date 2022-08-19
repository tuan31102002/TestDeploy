/* create constant variables with numbers of data 
 to use multiple time and shorten code in other.js file */
const REGISTER_INFOS = [
	{
		title: 'Username',
		icon: 'user',
		type: 'text',
		info: '',
	},
	{
		title: 'Password',
		icon: 'key',
		type: 'password',
		info: '',
	},
	{
		title: 'rePassword',
		icon: 'shield',
		type: 'password',
		info: '',
	},
	{
		title: 'Telephone',
		icon: 'phone',
		type: 'text',
		info: '',
	},
	{
		title: 'Mail',
		icon: 'envelope',
		type: 'text',
		info: '',
	},
	{
		title: 'D.O.B',
		icon: 'cake-candles',
		type: 'date',
		info: '',
	},
];
const AVATAR_IMAGES = [
	{
		id: 1,
		url: '02.jpg',
	},
	{
		id: 2,
		url: 'akame.jpg',
	},
	{
		id: 3,
		url: 'aqua.jpg',
	},
	{
		id: 4,
		url: 'asuna.jpg',
	},
	{
		id: 5,
		url: 'dark_saber.jpg',
	},
	{
		id: 6,
		url: 'hanezawa.jpg',
	},
	{
		id: 7,
		url: 'maisakurajima.jpg',
	},
	{
		id: 8,
		url: 'natusme2.jpg',
	},
	{
		id: 9,
		url: 'rem.jpg',
	},
];
const PLACEHOLDER_TEXT = '   Aa';
const USERNAME_INDEX = 0;
const PASSWORD_INDEX = 1;
const REPASSWORD_INDEX = 2;
const TELEPHONE_INDEX = 3;
const MAIL_INDEX = 4;
const DOB_INDEX = 5;
export default {
	REGISTER_INFOS,
	AVATAR_IMAGES,
	PLACEHOLDER_TEXT,
	USERNAME_INDEX,
	PASSWORD_INDEX,
	REPASSWORD_INDEX,
	TELEPHONE_INDEX,
	MAIL_INDEX,
	DOB_INDEX,
};
