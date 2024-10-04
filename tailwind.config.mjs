/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ah-pink': '#cb299a',
				'ah-pink-dark': '#A2207B',
				'ah-yellow': '#CCB329',
				'ah-yellow-dark': '#A28E20',
				'ah-gray': '#435363',
				'ah-blue': '#2973CC',
				'ah-blue-dark': '#205AA2',
				'ah-green': '#d1fd84',
				'ah-cream': '#fffdfb',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
