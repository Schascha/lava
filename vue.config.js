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
		'/'
};
