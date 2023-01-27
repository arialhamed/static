import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';

/**
 * This class provides common used sampling methods which can be accessed via **causalNetSamplers**.
 * @class CausalNetSamplers
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/gibbSampler.babel.js]
 */

export class GibbsSampler extends platform.mixWith( BaseTensor, []){
    constructor(p,q){
        super();
        this.p = p;
        this.q = q;
    }

    step(n=1){
        
    }
}