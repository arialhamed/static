/**
 * This mixin class provide attributes: **ParameterInitializer**, **LayerRunner**, 
 * and handle **Net** setting of pipelineConfig 
 * @class LayerRunnerMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/layerRunner.mixins.babel.js]
 */
const LayerRunnerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    async saveParams(fileName){
        await this.LayerRunner.NetParameters.saveParams(fileName);
        return this;
    }
    async loadParams(fileName){
        this.LayerRunner.NetParameters = await this.LayerRunner.NetParameters.loadParams(fileName);
        return this;
    }

    async getSavedParamList(){
        return await this.LayerRunner.NetParameters.getSavedParamList();
    }

    get ParameterInitializer(){
        if(!this.parameterInitializer){
            throw Error('ParameterInitializer is not set');
        }
        return this.parameterInitializer;
    }

    set ParameterInitializer(parameterInitializer){
        this.parameterInitializer = parameterInitializer;
    }


    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set LayerRunner by config');
        const { Net } = pipelineConfig;
        const { Layers, Parameters } = Net; 
        this.LayerRunner.NetLayers = Layers;
        this.ParameterInitializer = Parameters;       
        this.LayerRunner.NetParameters = this.ParameterInitializer(Layers);
        this.Logger.groupEnd();
    }

    set LayerRunner(runner){
        this.layerRunner = runner;
    }
    get LayerRunner(){
        if(!this.layerRunner){
            throw Error('layerRunner is not set');
        }
        return this.layerRunner;
    }
};

export default LayerRunnerMixins;