import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
/**
 * This Functor class provides common used data processing methods for pipeline
 * @class Functor
 * @extends BaseFunctor
 */
class Functor extends platform.mixWith(BaseFunctor, [] ){
    constructor(){
        super();
    }
}

export default new Functor();