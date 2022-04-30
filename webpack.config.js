const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 8888

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: 'bundle.[hash].js',
      publicPath: '/',
   },
   resolve: {
      alias: {
         'react-dom': '@hot-loader/react-dom',
      },
   },
   devtool: 'inline-source-map',

   module: {
      rules: [
         // First Rule
         {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },

         // Second Rule
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader',
               },
               {
                  loader: 'css-loader',
                  options: {
                     modules: true,
                     localsConvention: 'camelCase',
                     sourceMap: true,
                  },
               },
            ],
         },
      ],
   },
   devServer: {
      host: '192.168.1.48',
      port: port,
      historyApiFallback: true,
      open: true,
   },
}
