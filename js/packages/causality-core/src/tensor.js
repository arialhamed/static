/**
 * class Tensor is the primitive class for composing higher tensor based class.
 * This class wrap [tensorflowjs](https://www.tensorflow.org/js) for providing tensor calculation
 * @class Tensor
 * @example
 * [EXAMPLE ../examples/tensor.babel.js]
 */
export default class Tensor{
    constructor(){
        this.T = require('@tensorflow/tfjs-node');
        // require('@tensorflow/tfjs-node-gpu');
    }
    /**
     * This method return the core tensor instance
     * @readonly
     * @memberof Tensor
     */
    get CoreTensor(){
        return this.T;
    }
    /**
     * Check if object is tensor
     * @param { Object } object
     * @returns { Boolean } true if input is tensor
     * @memberof Tensor
     */
    isTensor(object){
       return object instanceof this.T.Tensor; 
    }
}