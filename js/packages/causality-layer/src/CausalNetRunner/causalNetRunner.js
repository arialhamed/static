import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as RunnerMixins } from './runner.mixins';
/**
 * This CausalNetRunner class provide net excecutor which is provided pipeline instance at **LayerRunner** attribute.
 * { mixWith: [ RunnerMixins ] }
 * @class CausalNetRunner
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/runner.mixins.babel.js]
 */
class CausalNetRunner extends platform.mixWith(BaseTensor, [ RunnerMixins ] ){
    constructor(){
        super();
    }
}

export default new CausalNetRunner();