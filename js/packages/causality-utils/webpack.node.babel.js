import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
import {default as nodeExternals} from 'webpack-node-externals';
const NodeConfig = merge(common, {
    target: 'node',
    output: {
      path: resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      filename: '[name].node.js',
      chunkFilename: '[name].js',
      library: Bundle.main,
      globalObject: 'this'
    },
    externals: ['cross-fetch','fetch-readablestream','generate-schema','ajv', nodeExternals(),
                'platform','pngjs3','csv-parser', 'json5']  
});
export default NodeConfig;