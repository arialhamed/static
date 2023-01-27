import { Event, Functor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { indexDBStorage, StorageMixins } from 'causal-net.storage';
import { termLogger, LoggerMixins } from 'causal-net.log';
class CausalNetPreprocessingStream extends platform.mixWith(Event, 
    [ StorageMixins, LoggerMixins ]){
    constructor(preprocessingStorage, functor, logger){
        super();
        this.Storage = preprocessingStorage;
        this.F = functor;
        this.R = this.F.CoreFunctor;
        this.Logger = logger;
        this.preprocessingData = { samples: [], labels: [], finished: false, trainSet: [], testSet: [] };  
    }
    get PreprocessingData(){
        return this.preprocessingData;
    }

    get TrainSet(){
        return this.preprocessingData.trainSet;
    }

    get TestSet(){
        return this.preprocessingData.testSet;
    }
    
    set SampleTransformer(sampleFn){
        this.sampleFn = sampleFn;
    }
    set LabelTransformer(labelFn){
        this.labelFn = labelFn;
    }
    get SampleTransformer(){
        if(!this.sampleFn){
            throw Error('SampleTransformer is not set');
        }
        return this.sampleFn;
    }
    get LabelTransformer(){
        if(!this.labelFn){
            throw Error('LabelTransformer is not set');
        }
        return this.labelFn;
    }
    get DataHandler(){
        if(!this.dataHandler){
            throw Error('DataHandler is not set');
        }
        this.dataHandler;
    }

    setDataHandler(){
        const SampleTransformer = this.SampleTransformer;
        const LabelTransformer = this.LabelTransformer;
        const Storage = this.Storage;
        const ProgressLenses = ({idx, range, message})=>{ 
            if(idx === 0){
                this.Logger.progressBegin(range);
                return;
            }
            if(idx + 1 === range){
                this.Logger.progressEnd();
                return;
            }
            this.Logger.progressUpdate(message);
        };
            
        this.dataHandler = (data)=>{
            return new Promise(async (resolve, reject)=>{
                let chunkName = data.ChunkName;
                if(chunkName === undefined){
                    reject(`chunkName is not defined`);
                }
                if(data.Sample){
                    let identity = '';
                    
                    for(let [idx, sample] of this.F.enumerate(data.Sample)){
                        ProgressLenses({idx, range: data.Sample.length, message: 'preprocessing Sample: ' + idx });
                        sample = await SampleTransformer(sample);
                        identity = chunkName + '/' + idx;
                        await Storage.setItem('preprocessing/sample/' + identity, JSON.stringify(sample));
                        this.preprocessingData.samples.push(identity);
                        
                    }
                }
                if(data.Label){
                    let identity = '';
                    for(let [idx, label] of this.F.enumerate(data.Label)){
                        ProgressLenses({idx, range: data.Label.length, message: 'preprocessing Label: ' + idx });
                        label = await LabelTransformer(label);
                        identity = chunkName + '/' + idx;
                        await Storage.setItem('preprocessing/label/' + identity, JSON.stringify(label));
                        this.preprocessingData.labels.push(identity);
                    }
                }
                resolve(true);
            }); 
        };
        this.on('data', this.dataHandler);
    }
    
    splitDataset(trainSize=0.9){
        const R = this.F.CoreFunctor;
        //TODO: enhance this for handle missing data/label case
        let { samples, labels } = this.preprocessingData;
        let data = this.F.zip(samples, labels);
        if(trainSize < 1){
            trainSize = parseInt(data.length*trainSize);
        }    
        const [ trainSet, testSet ] = R.splitAt(trainSize, data);
        this.preprocessingData.trainSet = trainSet;
        this.preprocessingData.testSet = testSet;
        return [trainSet, testSet];
    }
    makeBatchGenerator(batchData){
        const Storage = this.Storage;
        let nextIndex = 0;
        const batchGenerator = {
                next: async()=>{
                    let samples = [], labels = [];
                    
                    for(let [samplePath, labelPath] of batchData[nextIndex]){
                        samplePath = 'preprocessing/sample/' + samplePath;
                        labelPath = 'preprocessing/label/' + labelPath;
                        let sampleItem = await Storage.getItem(samplePath);
                        let labelItem = await Storage.getItem(labelPath);
                        //TODO: fix this issue of unalign format of item
                        let sample = JSON.parse(sampleItem[samplePath]);
                        sample = (sample.data)?sample.data:sample;
                        let label = JSON.parse(labelItem[labelPath]);
                        label = (label.data)?label.data:label;
                        samples.push(sample);
                        labels.push(label);
                    }
                    nextIndex += 1;
                    
                    return { samples, labels };
                },
                *[Symbol.iterator]() {
                    while(nextIndex < batchData.length){
                        yield this.next();
                    }
                }
            };
        return batchGenerator;
    }
    makeTrainDataGenerator(){
        const R = this.R;
        const TrainSet = this.TrainSet;
        return (batchSize=TrainSet.length)=>{
            let batchData = R.splitEvery(batchSize, TrainSet);
            return this.makeBatchGenerator(batchData);
        };
        
    }
    makeTestDataGenerator(){
        const R = this.R;
        const TestSet = this.TestSet;
        return (batchSize=TestSet.length)=>{
            //TODO: perform permutate
            let batchData = R.splitEvery(batchSize, TestSet);
            return this.makeBatchGenerator(batchData);
        };
    }
}
var functor = new Functor();
export default new CausalNetPreprocessingStream(indexDBStorage, functor, termLogger);