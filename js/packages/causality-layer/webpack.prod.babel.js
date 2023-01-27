import TerserPlugin from 'terser-webpack-plugin';
import NodeConfig from './webpack.node.babel';
import WebConfig from './webpack.web.babel';
NodeConfig.mode = 'production';
const TerserJS = new TerserPlugin({
    sourceMap: true, 
    include: /\.js$/, 
    parallel:true
});
WebConfig.mode = 'production';
WebConfig.devtool = 'source-map';
WebConfig.optimization = { minimizer: [TerserJS] };
module.exports = [NodeConfig, WebConfig];