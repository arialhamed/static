const ParameterMixins = (BaseParameterClass)=> class extends BaseParameterClass{ 
    
    
    
    get Parameters(){
        if(!this.parameters){
            throw Error('parameters is not set');
        }
        return this.parameters;
    }
    
    set Parameters(parameters){
        this.parameters = parameters;
    }

    set ParameterSizes(parameterSizes){
        this.parameterSizes = parameterSizes;
    }

    get ParameterSizes(){
        if(!this.parameterSizes){
            throw Error('parameterSizes is not set');
        }
        return this.parameterSizes;
    }
    
    get SaveModelDir(){
        return 'saveModel/';
    }
    
    exportParameters(){
        if(!this.parameters){
            throw Error('parameter is not set');
        }
        return (async ()=>{
            const Fn = async (param)=>(Array.from(await param.data()));
            let params = await this.extractParamFromTensorDict(this.parameters, Fn);
            return params;
        })();
    }

    
    async extractParamFromTensorDict(params, fn){
        const R = this.R;
        const Traveller = async (params, fn)=>{
            if(this.isTensor(params)){
                return await fn(params);
            }
            else{
                let kVals = R.toPairs(params);
                let res = {};
                for(let [k, val] of kVals){
                    res[k] = await Traveller(val, fn); 
                }
                return res;
            }
        };
        return await Traveller(params, fn);
    }
    
    async parametersSummary(){
        if(!this.parameters){
            throw Error('parameter must be set');
        }
        const Fn = async (param)=>Array.from(await param.mean().data());
        return await this.extractParamFromTensorDict(this.parameters, Fn);
    }
    
    initParamSizesByLayers(layers){
        const { compose, fromPairs, map, values, concat, reduce, filter } = this.R;
        const GetParamSize = compose(fromPairs, map(p=>[p.Name, p.Parameters]), filter(p=>p.Parameters));
        let flattenLayers = compose(reduce((s,v)=>concat(s,v),[]), values)(layers);
        this.ParameterSizes = GetParamSize(flattenLayers);
    }

    importParameters(paramObject){
        const T = this.T, F = this.F;
        const SetOrInit = ( initPredict, paramObject )=>{
                    return F.parameterMapWithKey((keys, paramSize)=>{
                        let paramValue = this.F.getIn(keys, paramObject, null);
                        if(paramValue === null){
                            return T.variable(T.randomNormal(paramSize).asType('float32'));
                        }
                        else{
                            return T.variable(T.tensor(paramValue, paramSize, 'float32'));
                        }                        
                    }, initPredict);
                };
        this.Parameters = SetOrInit( this.ParameterSizes, paramObject );
    }

    InitParameters(paramObject={}){
        return (layers)=>{
            return this.setOrInitParams(layers, paramObject);
        };
    }

    setOrInitParams(layers, paramObject){
        this.initParamSizesByLayers(layers);
        this.importParameters(paramObject);
        return this;
    }

    async getSavedParamList(){
        const Storage = this.Storage, SaveDir = this.SaveModelDir;
        let fileList = await Storage.getFileList(SaveDir);
        return fileList.map(fileName=>fileName.replace(SaveDir,''));
    }

    async saveParams(fileName){
        const SaveDir = this.SaveModelDir;
        const Storage = this.Storage;
        let params = await this.exportParameters();
        await Storage.writeFile(SaveDir + fileName, JSON.stringify(params));
        return params;
    }
    async loadParams(fileName){
        const Storage = this.Storage, SaveDir = this.SaveModelDir;
        let strParams = await Storage.readFile(SaveDir+fileName);
        let params = JSON.parse(strParams);
        this.importParameters(params);
        return this;
    }
};

export default ParameterMixins;