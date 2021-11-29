const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/,
        use: [
          {
            loader: 'img-optimize-loader',
            options: {
              name: 'assets/imgs/[contenthash].[ext]',
              compress: {
                webp: true,
                disableOnDevelopment: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: './css/[name].css' })],
  mode: 'development',
  devtool: 'inline-source-map',
}
