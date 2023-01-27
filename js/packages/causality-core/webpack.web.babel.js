import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
//TODO: implement GPU load
const WebConfig = merge(common, {
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    chunkFilename: '[name].js',
    library: Bundle.main,
    globalObject: 'this'
  },  
  externals: [function(context, request, callback) {
                if (/tfjs-node/.test(request)){
                    console.log('found tfjs-node');
                    return callback(null, '@tensorflow/tfjs');//need to consider for alternative solution;
                }
                callback();
              },
              'ramda','levelup','@tensorflow/tfjs']
});

export default WebConfig;