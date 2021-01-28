module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			'display': ['"Quincy CF"'],
			'body': ['Inter'],
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
