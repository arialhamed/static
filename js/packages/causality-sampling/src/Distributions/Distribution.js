import { Tensor as BaseTensor } from 'causal-net.core';
import random from 'random';
export default class Distribution extends BaseTensor {
    constructor({...kwargs}){
        super();
        this.random = random;
    }
    /**
     * Log likelihood
     * @param {*} x 
     */
    logP(x){
        throw Error('implementation is required');
    }
    getSize(shape){
        return shape.reduce((size, sh)=>size*sh,1);
    }
    sampling(size){
        throw Error('implementation is required');
    }
}