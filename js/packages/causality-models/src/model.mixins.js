const ModelMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get LossModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Loss;
    }

    get FitModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Fit;
    }
    
    get OneHotPredictModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.OneHotPredict;
    }

    get PredictModel(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel.Predict;
    }

    get Model(){
        if(!this.netModel){
            throw Error('netModel is not set');
        }
        return this.netModel;
    }
    

    set Model(model){        
        this.netModel = model;
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set Model by config');
        const { Model } = pipelineConfig.Net;
        if(!Model){
            throw Error(`Model is not set in ${JSON.stringlify(pipelineConfig)}`);
        }
        Model.LayerRunner = this.LayerRunner;
        this.Model = Model;
        this.Logger.groupEnd();
    }
};

export default ModelMixins;
