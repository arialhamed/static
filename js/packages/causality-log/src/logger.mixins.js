import {default as BaseLogger } from './baseLogger';
import { assert } from 'causal-net.utils';
/**
 * This LoggerMixins class provides mixins for accquiring logger
 * @class LoggerMixins
 * @extends BaseClass
 * @example
 * [EXAMPLE ../examples/logger.mixins.babel.js]
 */
const LoggerMixins = (BaseClass)=> class extends BaseClass{
    
    set Logger(logger){
        assert.beInstanceOf(logger, BaseLogger);
        this.logger = logger;
    }
    
    get Logger(){
        if(!this.logger){
            throw Error('logger is not set');
        }
        return this.logger;
    }
};

export default LoggerMixins;