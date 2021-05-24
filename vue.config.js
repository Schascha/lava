module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `
					@import '@schascha/sassy-mixins';
					`
			}
		}
	},

	publicPath: process.env.NODE_ENV === 'production' ?
		'/lava/' :
		'/',

	pwa: {
		name: 'lava',
		themeColor: '#141b1f',
		manifestOptions: {
			background_color: '#141b1f'
		}
	}
};
