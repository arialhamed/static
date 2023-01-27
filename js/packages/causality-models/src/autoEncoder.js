import { default as BaseModel } from './baseModel';
import { causalNetMetrics } from './Metrics/index';

class AutoEncoder extends BaseModel{
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
        const { LayerEncode, LayerDecode } = this.LayerRunner;
        return (inputTensor, contexts)=>{
            let encodeTensor = LayerEncode(inputTensor, contexts);
            let decodeTensor = LayerDecode(encodeTensor, contexts);
            return decodeTensor;
        };
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
        return (inputTensor, contexts)=>{
            let encodeTensor = LayerEncode(inputTensor, contexts);
            let decodeTensor = LayerDecode(encodeTensor, contexts);
            return decodeTensor; 
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

export default AutoEncoder;