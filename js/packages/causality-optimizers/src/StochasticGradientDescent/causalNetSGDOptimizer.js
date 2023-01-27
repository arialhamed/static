import { default as AdamOptimizer } from './adamOptimizer';
import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as SGDFitParamsMixins } from './SGDFitParams.mixins';
/**
 * This class provides optimizing methods which can be accessed via **causalNetSGDOptimizer** instance.
 *
 * @class CausalNetSGDOptimizer
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNetSGDOptimizers.babel.js]
 */
class CausalNetSGDOptimizer extends platform.mixWith(BaseTensor, [SGDFitParamsMixins]){
    constructor(){
        super();
    }
    adam(optimizerParams){
        return new AdamOptimizer(optimizerParams); 
    }
}

export default new CausalNetSGDOptimizer();