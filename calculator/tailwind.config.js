/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],  theme: {
		extend: {
			colors: {
				theme1: {
				  'background-main': 'hsl(222, 26%, 31%)',
				  'background-toggle': 'hsl(223, 31%, 20%)',
				  'background-screen': 'hsl(224, 36%, 15%)',
				  'key-background': 'hsl(225, 21%, 49%)',
				  'key-shadow': 'hsl(224, 28%, 35%)',
				  'key-background-toggle': 'hsl(6, 63%, 50%)',
				  'key-shadow-dark': 'hsl(6, 70%, 34%)',
				  'key-background-light': 'hsl(30, 25%, 89%)',
				  'key-shadow-light': 'hsl(28, 16%, 65%)',
				  'text-dark-grayish': 'hsl(221, 14%, 31%)',
				  'text-white': 'hsl(0, 0%, 100%)',
				},
				theme2: {
				  'background-main': 'hsl(0, 0%, 90%)',
				  'background-toggle': 'hsl(0, 5%, 81%)',
				  'background-screen': 'hsl(0, 0%, 93%)',
				  'key-background': 'hsl(185, 42%, 37%)',
				  'key-shadow': 'hsl(185, 58%, 25%)',
				  'key-background-toggle': 'hsl(25, 98%, 40%)',
				  'key-shadow-dark': 'hsl(25, 99%, 27%)',
				  'key-background-light': 'hsl(45, 7%, 89%)',
				  'key-shadow-light': 'hsl(35, 11%, 61%)',
				  'text-dark-grayish': 'hsl(60, 10%, 19%)',
				  'text-white': 'hsl(0, 0%, 100%)',
				},
				theme3: {
				  'background-main': 'hsl(268, 75%, 9%)',
				  'background-toggle': 'hsl(268, 71%, 12%)',
				  'background-screen': 'hsl(268, 71%, 12%)',
				  'key-background': 'hsl(281, 89%, 26%)',
				  'key-shadow': 'hsl(285, 91%, 52%)',
				  'key-background-toggle': 'hsl(176, 100%, 44%)',
				  'key-shadow-light': 'hsl(177, 92%, 70%)',
				  'key-background-dark': 'hsl(268, 47%, 21%)',
				  'key-shadow-dark': 'hsl(290, 70%, 36%)',
				  'text-light-yellow': 'hsl(52, 100%, 62%)',
				  'text-very-dark-blue': 'hsl(198, 20%, 13%)',
				  'text-white': 'hsl(0, 0%, 100%)',
				},
			  },
		},
	},
	plugins: [],
}

