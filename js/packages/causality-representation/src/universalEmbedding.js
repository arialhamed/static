import { platform, fetch } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
import { default as functor } from './functor';
import { default as VectorMetricMixins } from './vectorMetrics.mixins';

/**
 * This UniversalEmbedding provide methods for transform sentences into 
 * its single vector representation 
 * based on [use](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
 * 
 * @class UniversalEmbedding
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/universalEmbedding.babel.js]
 */
class UniversalEmbedding extends platform.mixWith(Tensor, 
    [ VectorMetricMixins ]){
    
    constructor(functor){
        super();
        /**
         * @private { TensorModel } 
         */
        this.model = null;
        this.f = functor;
        this.R = this.f.CoreFunctor;
        this.vecSize = 512;
    }
    
    async connect(link){
        this.model = await this.T.loadGraphModel(link);
        return this;
    }

    async sentenceEncode(sentences, asTensor=true){
        if(!this.model){
            throw Error(`model is not connect`);
        }
        const T = this.T;
        //only one sentence
        let embeddings = [];
        for(let tokenIdxs of sentences){
            let idxs = tokenIdxs.map((t,i)=>[0,i]);
            let indices = T.tensor(idxs, [tokenIdxs.length, 2], 'int32');
            let values = T.tensor(tokenIdxs, [tokenIdxs.length], 'int32');
            embeddings.push( await this.model.executeAsync({indices, values}) );
        }
        let sentTensor = T.stack(embeddings);
        if(asTensor){
            return sentTensor;
        }
        else{
            let vec = await sentTensor.data();
            sentTensor.dispose();
            return this.R.splitEvery(this.vecSize, vec);
        }
    }

    async transform(tokenIdxs){
        let [vec] = await this.sentenceEncode([tokenIdxs], false);
        return Array.from(vec);
    }
}
export default new UniversalEmbedding(functor);