module.exports = function(grunt) {

	require('load-grunt-config')(grunt, {
		config: {
			build: 'public',
			ui: 'static',
			bower: 'bower_components'
		}
	});
};
