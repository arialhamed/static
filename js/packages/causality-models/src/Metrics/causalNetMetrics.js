import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { underline } from 'ansi-colors';
/**
 * This class provides evaluation metrics methods which can be accessed via **causalNetMetrics** instance.
 *
 * @class CausalNetMetrics
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNetMetrics.babel.js]
 */
class CausalNetMetrics extends platform.mixWith(BaseTensor, []){
    constructor(){
        super();
    }
    accuracy(oneHotPredicts, oneHotLabels, maskingLabels=null){
        let labelScores =  this.T.equal(oneHotPredicts.argMax(-1), oneHotLabels.argMax(-1));
        if(maskingLabels){
            labelScores = labelScores.mul(maskingLabels);
        }
        return labelScores.mean();
    }
    mse(predicts, labels, maskingLables=null){
        let labelScores = predicts.sub(labels).pow(2);
        if(maskingLables){
            labelScores = labelScores.mul(maskingLabels);
            return labelScores.div(maskingLables.cumsum());
        }
        return labelScores.mean();
    }
    mae(predicts, labels, maskingLables=null){
        let labelScores = predicts.sub(labels).abs();
        if(maskingLables){
            labelScores = labelScores.mul(maskingLabels);
            return labelScores.div(maskingLables.cumsum());
        }
        return labelScores.mean();
    }
    
    KLpq(p, q, maskingLabels=null){
        return p.mul( log( p.div(q) ).log() ).sum();
    }
}

export default new CausalNetMetrics();