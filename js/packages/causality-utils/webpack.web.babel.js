import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';

const fakeFs = (context, request, callback)=>{
  if (/^fs$/.test(request)){
      console.log('found fs');
      return callback(null, 'null-loader');//console is exported instead of fs
  }
  callback();
};
const WebConfig = merge(common, {
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    chunkFilename: '[name].js',
    library: Bundle.main,
    globalObject: 'this'
  },
  externals:['cross-fetch', 'fetch-readablestream', 'generate-schema', 'ajv', fakeFs,
             'webpack-node-externals', 'platform', 'pngjs3', 'csv-parser', 'json5']  
});
export default WebConfig;