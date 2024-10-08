/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#2B317B',
				'secondary': '#5C56A1',
				'secondary-light': '#6A7DBC',
			}
		},
	},
	plugins: [],
}
