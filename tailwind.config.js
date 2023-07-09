/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'body-black': '#000000',
				'body-white': '#ebeef5',
				primary: {
					50: '#f4f6f7',
					100: '#e3e6ea',
					200: '#cbd1d6',
					300: '#a6b0ba',
					400: '#7a8796',
					500: '#5f6c7b',
					600: '#515b69',
					700: '#464d58',
					800: '#3e434c',
					900: '#373b42',
					950: '#25282e',
				},
				secondary: {
					50: '#f4f6f7',
					100: '#e3e6ea',
					200: '#cbd0d6',
					300: '#a6b0ba',
					400: '#7a8696',
					500: '#5f6b7b',
					600: '#515a69',
					700: '#464d58',
					800: '#3e424c',
					900: '#373a42',
					950: '#292c33',
				},
			},
			fontFamily: {
				body: [
					'Poppins',
					'"Helvetica Neue"',
					'Arial',
					'"Hiragino Kaku Gothic ProN"',
					'"Hiragino Sans"',
					'Meiryo',
					'sans-serif',
				],
			},
			gridTemplateRows: {
				layout: 'auto 1fr auto',
			},
			gridTemplateColumns: {
				100: '100%',
				repeat: 'repeat(auto-fit, minmax(234px, 1fr))',
			},
		},
	},
	plugins: [],
};
