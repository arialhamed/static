/**
 * This mixin class provides attributes: **Optimizer**, **Trainer**, **TrainDataGenerator**, 
 * methods **train**, handle **Optimizer** setting of pipelineConfig.Net
 * and **TrainDataGenerator** setting of pipelineConfig.Dataset.
 *
 * @class TrainerMixins
 * @extends {BasePipelineClass}
 * @example
 * [EXAMPLE ../examples/trainer.mixins.babel.js]
 */
const TrainerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get Trainer(){
        const T = this.T;
        const ModelLossFn=this.Model.Loss, Optimizer=this.Optimizer;
        return (sampleTensor, labelTensor, contexts)=>{
            const LossFn = ()=>{
                return T.tidy( ()=>{ 
                    return ModelLossFn(sampleTensor, labelTensor, contexts); 
                } );
            };
            return Optimizer.fit(LossFn);
        };
    }

    get Optimizer(){
        if(!this.optimizer){
            throw Error('optimizer is not set');
        }
        return this.optimizer;
    }
    

    set Optimizer(optimizer){
        this.optimizer = optimizer;
    }

    get TrainDataGenerator(){
        if(!this.trainDataGenerator){
            throw Error('TrainDataGenerator is not set');
        }
        return this.trainDataGenerator;
    }
    set TrainDataGenerator(TrainDataGenerator){
        this.trainDataGenerator = TrainDataGenerator;
    }

    async train({ numEpochs=10, batchSize=1, ...trainContexts }={}){
        let contexts = { batchSize, ...trainContexts };
        const F = this.F, R = this.F.CoreFunctor, T = this.T;
        const TrainDataGenerator = this.TrainDataGenerator, Trainer = this.Trainer;
        let losses = [], logger = this.Logger;
        return new Promise(async (resolve, reject)=>{
            logger.progressBegin(numEpochs);
            for(let epochIdx of F.range(numEpochs)){
                const TrainData = TrainDataGenerator(batchSize);
                let iterLosses = [];
                for await (let { samples, labels } of TrainData){
                    contexts['batchSize'] = samples.length;
                    let sampleTensor = T.tensor(samples).asType('float32');
                    let labelTensor = T.tensor(labels).asType('float32');
                    let loss = Trainer(sampleTensor, labelTensor, contexts);
                    iterLosses.push(await loss.data());
                }
                losses.push(R.mean(iterLosses));
                iterLosses = [];
                logger.progressUpdate({epochIdx, losses, numEpochs});
            }
            logger.progressEnd();
            resolve({losses});
        });
    }


    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set Trainer by config');
        const { Optimizer } = pipelineConfig.Net;
        this.Optimizer = Optimizer;
        Optimizer.LayerRunner = this.LayerRunner;
        this.TrainDataGenerator = pipelineConfig.Dataset.TrainDataGenerator;
        this.Logger.groupEnd();
    }
};

export default TrainerMixins;