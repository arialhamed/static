import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
const fakePackage = (context, request, callback)=>{
  if (/^cli-progress$/.test(request)){
      console.log('found fs');
      return callback(null, 'null-loader');//console is exported instead of fs
  }
  if (/^vivid.d3-node$/.test(request)){
    console.log('found vivid.d3-node');
    return callback(null, 'null-loader');//console is exported instead of fs
  }
  if (/^canvas$/.test(request)){
    console.log('found canvas');
    return callback(null, 'null-loader');//console is exported instead of fs
  }
  if (/^svg2png$/.test(request)){
    console.log('found svg2png');
    return callback(null, 'null-loader');//console is exported instead of fs
  }
  if (/^fs$/.test(request)){
    console.log('found fs');
    return callback(null, 'null-loader');//console is exported instead of fs
  }
  if (/^open$/.test(request)){
    console.log('found open');
    return callback(null, 'null-loader');//console is exported instead of fs
  }
  callback();
};
const WebConfig = merge(common, {
  
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    library: Bundle.main,
    globalObject: 'this'
  },  
  externals:['causal-net.utils', fakePackage]
});

export default WebConfig;