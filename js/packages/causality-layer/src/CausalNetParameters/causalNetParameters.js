import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { default as ParameterMixins } from './parameter.mixins';
import { default as parameterfunctor } from './parameterFunctor';
/**
 * This class is a standard implementation for model parameters which can be accessed via **causalNetParameters** instance
 * { mixWith: [StorageMixins, ParameterMixins] }
 * @class CausalNetParameters
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../example/parameters.babel.js]
 */
class CausalNetParameters extends platform.mixWith(BaseTensor, [StorageMixins, ParameterMixins] ){
    constructor(storage, parameterfunctor){
        super();
        this.parameters = null;
        this.Storage = storage;
        this.F = parameterfunctor;
        this.R = this.F.CoreFunctor;
    }
}   

export default new CausalNetParameters(indexDBStorage, parameterfunctor);