import { Functor } from 'causal-net.core';
import { assert } from 'causal-net.utils';
/**
 * This mixin class provide attributes: **Sampling**.
 * @class SamplingMixins
 * @extends BaseClass
 * @example
 * [EXAMPLE ../examples/sampling.mixins.babel.js]
 */
const SamplingMixins = (BaseClass)=> class extends BaseClass{
    /**
     * get current random instance
     */
    get Sampling(){
        if(!this.sampling){
            throw Error(`Sampling is not set`);
        }
        return this.sampling;
    }
    
    /**
     * set Sampling instance
     * @readonly
     */
    set Sampling(sampling){
        assert.beInstanceOf(sampling, Functor);
        this.sampling = sampling;
    }
};

export default SamplingMixins;