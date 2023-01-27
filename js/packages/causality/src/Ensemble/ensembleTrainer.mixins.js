/**
 * The EnsembleTrainerMixins class is the mixins class for training ensamblable models
 * @class EnsembleTrainerMixins
 * @extends {BasePipelineClass}
 */
const EnsembleTrainerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    /**
     * Train model and save to storage under the given filename. parameters is reinited for each training
     * @param { Number } numEpochs
     * @param { Number } batchSize
     * @param { String } saveFileName
     * @returns { Promise } Training losses
     */
    async ensembleTrain({numEpochs=10, batchSize=20, saveFileName='model', ...trainContexts}={}){
        let contexts = { batchSize, ...trainContexts };
        this.LayerRunner.NetParameters = this.ParameterInitializer(this.LayerRunner.NetLayers);
        let {losses} = await this.train(numEpochs, batchSize, contexts);
        await this.saveParams(saveFileName);
        return {[saveFileName]: losses};
    }
};

export default EnsembleTrainerMixins;