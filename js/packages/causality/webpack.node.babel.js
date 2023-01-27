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
    externals: [ 'causal-net.core', 'causal-net.utils', 'causal-net.log', 
                 'causal-net.memcache', 'causal-net.storage', 'causal-net.sampling', 
                 'causal-net.layer', 'causal-net.optimizers', 'causal-net.deployment',
                 'causal-net.preprocessing', 'causal-net.datasets' ] 
});
export default NodeConfig;