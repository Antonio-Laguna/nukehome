var path = require('path');

module.exports = function(grunt, options) {
  return {
    webpack: {
      context: '<%= ui %>/js',
      entry: ['babel-polyfill', './index.js'],
      output: {
        path: '<%= build %>/js',
        filename: '<%= package.name %>.js'
      },
      module: {
        loaders: [
          {
            test: /\.html$/,
            loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './static/js')) + '/!html'
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'ng-annotate',
            query: {
              map: false
            }
          }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
              presets: ['es2015']
            }
          }
        ]
      }
    }
  };
};
