import { default as Tensor } from './tensor';
import { default as Functor } from './functor';
/**
 * CausalNetCore class provides access to core function and core tensor
 *
 * @class CausalNetCore
 * @example
 * [EXAMPLE ../examples/core.babel.js]
 */
class CausalNetCore{
    constructor(){
    }
    get CoreFunctor(){
        this.F = new Functor();
        return this.F.CoreFunctor; 
    }

    get CoreTensor(){
        this.T = new Tensor();
        return this.T.CoreTensor; 
    }
}
export default new CausalNetCore();