import { Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { CategoryNormalizingMixins } from './Tabular/index';
class TabularPreprocessing extends platform.mixWith(BaseFunctor, 
    [CategoryNormalizingMixins]){
    constructor(){
        super();
    }
}

export default new TabularPreprocessing;