const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    // 虚拟打包路径
    publicPath: 'xuni',
    // 打包出来的文件名
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    // 静态资源文件夹
    contentBase: 'www'
  }
}