/**
 * The EnsembleModelMixins class is the mixis class for ensemble model caller
 * @class EnsembleModelMixins
 * @extends {BasePipelineClass}
 */
const EnsembleModelMixins = (BasePipelineClass)=> class extends BasePipelineClass{ 

    get EnsembleModelPredict(){
        const FitModel = this.FitModel;
        const T = this.T;
        const EnsembleModels = this.EnsembleModels;
        const Bagging = async (inputTensor)=>{
            let probFits = [];
            for(let model of EnsembleModels){
                await this.loadParams(model);
                let prob = FitModel(inputTensor).exp();
                probFits.push(prob);
            }
            let meanProb = T.stack(probFits).mean(0);
            return meanProb.argMax(1);
        };
        return Bagging;   
    }

    set EnsembleModels(modelist){
        this.ensembleModels = modelist;
    }

    get EnsembleModels(){
        if(!this.ensembleModels){
            throw Error('EnsembleModels is not set');
        }
        return this.ensembleModels;
    }
};
export default EnsembleModelMixins;