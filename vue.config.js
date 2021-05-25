const
	app = {
		name: 'Lava',
		meta: {
			description: 'Just a couple of calming blobs',
			url: 'https://schascha.github.io/lava',
		}
	}
;


module.exports = {
	chainWebpack: (config) => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = app.name;
				args[0].meta = app.meta;
				return args;
			});
	},

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
		name: app.name,
		themeColor: '#141b1f',
		manifestOptions: {
			background_color: '#141b1f'
		}
	}
};
