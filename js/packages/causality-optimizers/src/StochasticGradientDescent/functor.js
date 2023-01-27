import { Functor as BaseFunctor } from 'causal-net.core';
class Functor extends BaseFunctor{
    constructor(){
        super();
    }
    
    mergeParams(optimizerParams, defaultOptimizerParameters){
        const R = this.R;
        return R.mergeDeepLeft(optimizerParams, defaultOptimizerParameters);
    }
}

export default new Functor();