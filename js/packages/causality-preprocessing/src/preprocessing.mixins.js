const PreprocessingMixins = (BasePipelineClass) => class extends BasePipelineClass{
    get Preprocessing(){
        if( !this.streamPreprocessing ){
            throw Error('streamPreprocessing is not set');
        }
        return this.streamPreprocessing;
    }

    set Preprocessing(streamPreprocessing){
        this.streamPreprocessing = streamPreprocessing;
    }

    splitDataset(ratio=0.9){
        return this.Preprocessing.splitDataset(ratio);
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set Preprocessing by config');
        if(this.DataSourceReader){
            const { Preprocessing } = pipelineConfig.Dataset;
            if(!Preprocessing){
                throw Error(`expect { Preprocessing } get ${JSON.stringify(pipelineConfig.Dataset)}`);
            }
            const { SampleTransformer, LabelTransformer } = Preprocessing;
            if(!SampleTransformer || !LabelTransformer){
                throw Error(`expect { SampleTransformer, LabelTransformer } 
                    get ${JSON.stringify(pipelineConfig.Dataset.Preprocessing)}`);
            }
            this.Preprocessing.SampleTransformer = SampleTransformer;
            this.Preprocessing.LabelTransformer = LabelTransformer;
            this.Preprocessing.SampleTransformer = this.Preprocessing.SampleTransformer.bind(this);
            this.Preprocessing.LabelTransformer = this.Preprocessing.LabelTransformer.bind(this);
            this.Preprocessing.setDataHandler();
            this.DataSourceReader.pipe(this.Preprocessing);
            pipelineConfig.Dataset.TrainDataGenerator = this.Preprocessing.makeTrainDataGenerator();
            pipelineConfig.Dataset.TestDataGenerator = this.Preprocessing.makeTestDataGenerator();
        }
        this.Logger.groupEnd();
        return pipelineConfig;
    }
};

export default PreprocessingMixins;