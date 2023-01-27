import { Tensor } from 'causal-net.core';
class BaseModel extends Tensor{
    constructor(){
        super();
        this.modelName = '';
    }

    set LayerRunner(runner){
        throw Error('implement required');
    }

    get LayerRunner(){
        throw Error('implement required');
    }

    fit(){
        throw Error('implement required');
    }

    loss(){
        throw Error('implement required');
    }

    get Predict(){
        throw Error('model not support');
    }
    get OneHotPredict(){
        throw Error('model not support');
    }

    get Encode(){
        throw Error('model not support');
    }

    get Reconstruct(){
        throw Error('model not support');
    }
}

export default BaseModel;