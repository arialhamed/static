import { default as BaseModel } from './baseModel';
import { causalNetMetrics } from './Metrics/index';
import { causalNetSampling } from 'causal-net.sampling';
class RBM extends BaseModel{
    constructor({metrics='mse'}={}){
        super();
        this.MeasureError = causalNetMetrics[metrics];
    }

    set LayerRunner(layerRunner){
        let { LayerEncode, LayerDecode } = layerRunner;
        this.runner = { LayerEncode, LayerDecode };
    }

    get LayerRunner(){
        if(!this.runner){
            throw Error('runner is not set');
        }
        return this.runner;
    }
    
    get Fit(){
        return this.Reconstruct;
    }
    
    get Encode(){
        const { LayerEncode } = this.LayerRunner;
        return (inputTensor, contexts)=>{
            let encodeTensor = LayerEncode(inputTensor, contexts);
            return encodeTensor; 
        };
    }

    get Reconstruct(){
        const { LayerEncode, LayerDecode } = this.LayerRunner;
        const T = this.T;
        return (inputTensor, contexts)=>{
            let encodeTensor = LayerEncode(inputTensor, contexts);
            let hidSel = T.tensor(causalNetSampling.random(encodeTensor.shape), encodeTensor.shape);
            hidSel = T.tensor(encodeTensor.greater(hidSel).dataSync(), encodeTensor.shape);
            let hidden = encodeTensor.mul(hidSel);
            let decodeTensor = LayerDecode(hidden, contexts);
            let visSel = T.tensor(causalNetSampling.random(decodeTensor.shape), decodeTensor.shape);
            visSel = T.tensor(decodeTensor.greater(visSel).dataSync(), decodeTensor.shape);
            let visibleTensor = decodeTensor.mul(visSel);
            return visibleTensor; 
        };
    }

    get Loss(){
        const Fit = this.Fit;
        return (inputTensor, labelTensor, contexts)=>{
            let decodeTensor = Fit(inputTensor, contexts);
            let loss = this.MeasureError(decodeTensor, inputTensor);
            return loss;
        };
    }
}

export default RBM;