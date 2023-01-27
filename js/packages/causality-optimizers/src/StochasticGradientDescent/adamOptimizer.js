import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as functor } from './functor';
import { default as SGDFitParamsMixins } from './SGDFitParams.mixins';
export default class AdamOptimizer extends platform.mixWith(BaseTensor, 
    [ SGDFitParamsMixins ]){
    constructor(optimizerParams={}){
        super();
        let DefaultParameters = {beta1: 0.1, beta2: 0.2, epsilon:0.03};
        const {learningRate, beta1, beta2, epsilon} = functor.mergeParams(optimizerParams, DefaultParameters);
        this.params = { learningRate, beta1, beta2, epsilon };
        this.trainer = this.T.train.adam(learningRate, beta1, beta2, epsilon);
    }

    get Params(){
        return this.params;
    }
}