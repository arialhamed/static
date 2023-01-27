const SGDFitParamsMixins = (BaseOptimizerClass) => class extends BaseOptimizerClass{
    fit(lossFn, trainableVars){
        return this.trainer.minimize(lossFn, true, trainableVars);
    }
};

export default SGDFitParamsMixins;