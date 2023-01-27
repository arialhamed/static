import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as WordEmbeddingFunctorMixins } from './wordEmbeddingFunctor.mixins';
/**
 * This Function class provides methods for common used ultilities function
 * @export
 * @class Function
 * @extends BaseFunctor
 */

class Functor extends platform.mixWith(BaseFunctor, 
        [WordEmbeddingFunctorMixins]){
    constructor(){
        super();
    }
}

export default new Functor();