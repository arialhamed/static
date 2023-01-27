import TerserPlugin from 'terser-webpack-plugin';
import NodeConfig from './webpack.node.babel';
import WebConfig from './webpack.web.babel';
const TerserJS = new TerserPlugin({
    sourceMap: true, 
    include: /\.js$/, 
    parallel:true
});
NodeConfig.mode = 'production';
NodeConfig.devtool = 'source-map';
NodeConfig.optimization = {minimizer: [TerserJS]};
WebConfig.mode  = 'production';
WebConfig.devtool = 'source-map';
WebConfig.optimization = {minimizer: [TerserJS]};
module.exports = [NodeConfig, WebConfig];