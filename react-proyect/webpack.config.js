const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path:path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: "images/[hash][ext][query]",
    },
    devServer: {
        port: 4000
    },
 
    resolve :{
        extensions : ['.js','.jsx']        
    },
    
    module : {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use:['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // fallback to style-loader in development
           
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
                ],
              },
              {
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                include: path.join(__dirname,'src'),
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: 'img/',
                    publicPath:'img/',
                    userRelativePath: true
                  }
              },
              {
                test: /\.(png|jpe?g|gif|svg)$/i,
                /**
                 * The `type` setting replaces the need for "url-loader"
                 * and "file-loader" in Webpack 5.
                 *
                 * setting `type` to "asset" will automatically pick between
                 * outputing images to a file, or inlining them in the bundle as base64
                 * with a default max inline size of 8kb
                 */
                type: "asset",
        
                /**
                 * If you want to inline larger images, you can set
                 * a custom `maxSize` for inline like so:
                 */
                // parser: {
                //   dataUrlCondition: {
                //     maxSize: 30 * 1024,
                //   },
                // },
              },
              
              
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[chunkhash].css",
            chunkFilename: "[name].[chunkhash].css",
          }),
    ]
}