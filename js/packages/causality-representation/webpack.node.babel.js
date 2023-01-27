import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
const NodeConfig = merge(common, {
    output: {
      path: resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      filename: '[name].node.js',
      library: Bundle.main,
      globalObject: 'this'
    },
    externals:[ 'causal-net.utils', 'causal-net.core', 
                'causal-net.storage', 'causal-net.memcache',
                'tfjs-models.use-embedding', 'tsne-js']
});
export default NodeConfig;