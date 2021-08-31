const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path:path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4000
    },

    resolve :{
        extensions : ['.js','.jsx'],
        alias: {

            'images' : path.resolve(__dirname,'src/img')
        }
        
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
                    outputPath: "img/",
                    userRelativePath: true
                  }
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