import {Functor as BaseFunctor} from 'causal-net.core';
import {platform} from 'causal-net.utils';
import {default as ParameterFunctorMixins } from './parameterFunctor.mixins';

class ParameterFunctor extends platform.mixWith(BaseFunctor, [ ParameterFunctorMixins ] ){
    constructor(){
        super();
    }
}

export default new ParameterFunctor();