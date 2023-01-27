/**
 * This VectorMetricMixins class is provide methods for comparing vector representation of different sentences
 * @class VectorMetricMixins
 * @extends  BaseEmbeddingClass
 */
const VectorMetricMixins = (BaseEmbeddingClass)=> class extends BaseEmbeddingClass{ 
    
    /**
     * return the eucleudian distance between two representation vectors
     * @returns { Array } vec
     */
    async encodeMatching(tokenIdx1, tokenIdx2){
        let x = await this.sentenceEncode([tokenIdx1], true);
        x = x.reshape([-1]);
        let y = await this.sentenceEncode([tokenIdx2], true);
        y = y.reshape([-1]);
        return x.dot(y).div(x.norm().mul(y.norm()));
    }
};

export default VectorMetricMixins;
