import NodeConfig from './webpack.node.babel';
import WebConfig from './webpack.web.babel';
delete WebConfig.entry.examples;
module.exports = [NodeConfig, WebConfig];