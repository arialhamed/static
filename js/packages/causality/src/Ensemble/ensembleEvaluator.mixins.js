const EnsembleEvaluatorMixins = (BasePipelineClass)=> class extends BasePipelineClass{ 
    async ensembleTest({method='accuracy'}){
        throw Error('implement require'); 
    }
};
export default EnsembleEvaluatorMixins;