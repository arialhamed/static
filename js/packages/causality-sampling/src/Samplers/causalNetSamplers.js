import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import random from 'random';
import { default as SubSamplingMixins } from './subSampling.mixins';
import { default as NegSamplingMixins } from './negSampling.mixins';

/**
 * This class provides common used sampling methods which can be accessed via **causalNetSamplers**.
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSamplers
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSamplers.babel.js]
 */

class CausalNetSamplers extends platform.mixWith( BaseFunctor, 
    [ SubSamplingMixins, NegSamplingMixins ]){
    constructor(random){
        super();
    }
}

export default new CausalNetSamplers(random);