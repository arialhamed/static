import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';

const WebConfig = merge(common, {
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    chunkFilename: '[name].js',
    library: Bundle.main,
    globalObject: 'this'
  },
  externals:[
    function(context, request, callback) {
      if (/^leveldown$/.test(request)){
          console.log('found leveldown');
          return callback(null, 'level-js');//need to consider for alternative solution;
      }
      callback();
    }, 
    'causal-net.utils', 'causal-net.core']
});

export default WebConfig;