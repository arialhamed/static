/**
 * This mixin class provides attributes: **Deployment**, **Inferencer**, and handle Deployment setting of pipelineConfig.
 * @class DeploymentMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/causalNetDeployment.babel.js]
 */
const DeploymentMixins = (BasePipelineClass)=> class extends BasePipelineClass {
   
    set Deployment(deployment){
        this.deployment = deployment;
    }

    get Deployment(){
        if(!this.deployment){
            throw Error('deployment is not set');
        }
        return this.deployment;
    }

    get Inferencer(){
        const ModelLenses = ()=>{
            return this.Model;
        };
        const T = this.T;
        return async (input)=>{
            let { Predict, Encode, Decode } = input;
            let infer = {};
            const Model = ModelLenses();
            if(Predict){
                console.log(Predict);
                let inputTensor = T.tensor(Predict).asType('float32').reshape([1, -1]);
                inputTensor.print();
                let predictTensor = Model.Predict(inputTensor);
                infer.Predict = await predictTensor.data();
            }
            if(Encode){
                let inputTensor = T.tensor(Encode).asType('float32').reshape([1, -1]);
                let encodeTensor = Model.Encode(inputTensor);
                infer.Encode = await encodeTensor.data();
            }
            if(Decode){
                let inputTensor = T.tensor(Decode).asType('float32').reshape([1, -1]);
                let decodeTensor = Model.Encode(inputTensor);
                infer.Decode = await decodeTensor.data();
            }
            return infer;
        };
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set deployment by config');
        const { Emitter, Listener } = pipelineConfig.Deployment;
        this.Deployment.Emitter = Emitter;
        this.Deployment.Listener = Listener;
        this.Deployment.Inferencer = this.Inferencer;
        this.Logger.groupEnd();
        return pipelineConfig;
    }

    async deploy(){
        return await this.Deployment.deploy();
    }
};

export default DeploymentMixins;