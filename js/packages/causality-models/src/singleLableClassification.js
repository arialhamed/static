import { default as BaseModel } from './baseModel';

class SingleLabelClassification extends BaseModel{
    constructor(numClass){
        super();
        if(numClass > 0){
            this.numClass = numClass;
        }
        else{
            throw Error(`expect numclass, get ${numClass}`);
        }
    }

    set LayerRunner(layerRunner){
        let { LayerPredict } = layerRunner;
        this.runner = { LayerPredict };
    }

    get LayerRunner(){
        if(!this.runner){
            throw Error('runner is not set');
        }
        return this.runner;
    }
    
    get Fit(){
        const { LayerPredict } = this.LayerRunner;
        return (inputTensor, contexts)=>{
            let outPutTensor = LayerPredict(inputTensor, contexts);
            let logProb = outPutTensor.sub(outPutTensor.logSumExp(1, true));
            return logProb;
        };
    }
    
    get Predict(){
        const Fit = this.Fit;
        return (inputTensor, contexts)=>{
            let logProb = Fit(inputTensor, contexts);
            let predictedClass = logProb.argMax(1);
            return predictedClass;
        };
    }

    get OneHotPredict(){
        const Predict = this.Predict;
        return (inputTensor, contexts)=>{
            let predictedClass = Predict(inputTensor, contexts);
            let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
            return oneHotPredict;
        };
    }
    get Loss(){
        const Fit = this.Fit;
        return (inputTensor, labelTensor, contexts)=>{
            let logProb = Fit(inputTensor, contexts);
            let likelihood = logProb.neg().mul(labelTensor);
            let loss = likelihood.sum(1).mean();
            return loss;
        };
    }
}
export default SingleLabelClassification;