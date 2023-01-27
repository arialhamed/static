/**
 * This mixin class provides methods: **test** and 
 * handle **TestDataGenerator** setting of pipelineConfig.Dataset.
 *
 * @class EvaluatorMixins
 * @extends {BasePipelineClass}
 * @example
 * [EXAMPLE ../examples/trainer.mixins.babel.js]
 */
const EvaluatorMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get TestDataGenerator(){
        if(!this.testDataGenerator){
            throw Error('testDataGenerator is not set');
        }
        return this.testDataGenerator;
    }
    set TestDataGenerator(testDataGenerator){
        this.testDataGenerator = testDataGenerator;
    }

    async test({metrics=['accuracy']}={}){
        console.log({metrics});
        const T = this.T, R = this.F.CoreFunctor;
        const TestDataGenerator = this.TestDataGenerator, 
              OneHotPredictModel = this.OneHotPredictModel;
        return new Promise(async (resolve, reject)=>{
            const testData = TestDataGenerator();//take all    
            for await (let { samples, labels } of testData){
                let sampleTensor = T.tensor(samples).asType('float32');
                let labelTensor = T.tensor(labels).asType('float32');
                let predictTensor = OneHotPredictModel(sampleTensor);
                
            }
            let accuracy = R.mean(pass);
            resolve({accuracy, pass});     
        });
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set Evaluator by config');
        this.TestDataGenerator = pipelineConfig.Dataset.TestDataGenerator;
        this.Logger.groupEnd();
    }
};

export default EvaluatorMixins;