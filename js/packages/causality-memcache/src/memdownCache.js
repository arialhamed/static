import { platform } from 'causal-net.utils';
import { Store as BaseMemCache } from 'causal-net.core';
import { default as MemorizingMixins } from './memorizing.mixins';
/**
 * This class provides storage implementation for memory caching on top of
 * [memdown](https://www.npmjs.com/package/memdown) which can be accessed via **memDownCache**.
 * { mixWith: [ MemorizingMixins ] }
 * @class MemdownCache
 * @extends BaseMemCache
 */
class MemdownCache extends platform.mixWith( BaseMemCache,
    [ MemorizingMixins ]){
    constructor(){
        super();
        this.connect();
    }
    /**
     * Connect to database, this function shall be call when construct instance
     * @memberof MemdownCache
     */
    connect(){
        let memdown = require('memdown');
        this.store = this.levelup(memdown());        
    }
}

export default new MemdownCache();