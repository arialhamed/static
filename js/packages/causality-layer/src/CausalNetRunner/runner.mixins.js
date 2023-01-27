/**
 * This RunnerMixins class provide methods for runner class.
 * @class RunnerMixins
 * @extends BaseRunnerClass
 */
const RunnerMixins = ( BaseRunnerClass )=> class extends BaseRunnerClass{
    set NetParameters(parameters){
        this.netParameters = parameters;
    }
    set NetLayers(netLayers){
        this.netLayers = netLayers;
    }
    get NetParameters(){
        if(!this.netParameters){
            throw Error('netParameters is not set');
        }
        return this.netParameters.Parameters;
    }
    get NetLayers(){
        if(!this.netLayers){
            throw Error('netLayers is not set');
        }
        return this.netLayers;
    }
    

    runLayer(value, layerConfigure, layerParameters, contexts){
        const { Name, Type, Net } = layerConfigure;  
        if(Type === 'Layer'){
            let result = Net(value, layerParameters, contexts);
            return {[Name]: result};
        }   
        else{
            throw Error(`expect {Type} to be 'Layer' get ${layerConfigure}`);
        }
    }

    run(layers, samples, parameters, contexts){
        let pipeValue = {PipeInput: samples}, lastLayer = 'PipeInput';
        for(let layer of layers){
            let layerOutput = this.runLayer(pipeValue[lastLayer], layer, parameters[layer.Name], contexts);
            pipeValue[layer.Name] = layerOutput[layer.Name];
            lastLayer = layer.Name;
        }
        return pipeValue[lastLayer];
    }

    get LayerPredict(){
        let predictLayers = this.NetLayers.Predict;
        return (samples, contexts={})=>{
            let parameters = this.NetParameters;
            return this.run(predictLayers, samples, parameters, {...contexts, layer: 'Predict'});
        };
    }
    get LayerEncode(){
        let encodeLayers = this.NetLayers.Encode;
        return (samples, contexts={})=>{
            let parameters = this.NetParameters;
            return this.run(encodeLayers, samples, parameters, {...contexts, layer: 'Encode'});
        };
    }
    get LayerDecode(){
        let decodeLayers = this.NetLayers.Decode;
        return (samples, contexts={})=>{
            let parameters = this.NetParameters;
            return this.run(decodeLayers, samples, parameters, {...contexts, layer: 'Decode'});
        };
    }
};

export default RunnerMixins;
