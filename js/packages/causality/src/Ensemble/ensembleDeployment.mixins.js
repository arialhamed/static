/**
 * The EnsembleDeploymentMixins class is the mixis class for deploying ensemble model
 * @class CausalNet
 * @extends { BasePipelineClass }
 */
const EnsembleDeploymentMixins = (BasePipelineClass)=> class extends BasePipelineClass {
    /**
     * Provide EnsembleInferencer caller, EnsembleModelPredict must be set in prior
     * @readonly
     */
    get EnsembleInferencer(){
        const ModelLenses = ()=>({ EnsemblePredict: this.EnsembleModelPredict });
        const T = this.T;
        return async (input)=>{
            let { EnsemblePredict } = input;
            let infer = {};
            if(EnsemblePredict){
                let inputTensor = T.tensor(EnsemblePredict).asType('float32').reshape([1, -1]);
                let predictTensor = await ModelLenses().EnsemblePredict(inputTensor);
                infer.EnsemblePredict = await predictTensor.data();
            }
            return infer;
        };
    }
    /**
     * process pipelineConfig object for ensemble deployment
     * @param { Object } pipelineConfig
     * @returns
     */
    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set ensemble deployment by config');
        this.Deployment.EnsembleInferencer = this.EnsembleInferencer;
        this.Logger.groupEnd();
        return pipelineConfig;
    }
    /**
     * deploy model
     * @returns { Promise } deployment summary
     */
    async deploy(){
        return await this.Deployment.deploy();
    }
};

export default EnsembleDeploymentMixins;