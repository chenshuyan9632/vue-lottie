module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://xxx',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
