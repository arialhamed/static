const WordEmbeddingFunctorMixins = (BaseFunctionClass) => class extends BaseFunctionClass{
    /**
     *
     * @param { Array } tokens - list of tokens to find coresponding ids
     * @param { Function } mapper - 
     * @returns 
     */
    mapTokenToChunkIds(tokens, mapper){
        const R = this.R;
        const TokenChunkIdMapper = mapper;
        let tokenChunkMap = tokens.map( t => {
            let chunkId = TokenChunkIdMapper(t);
            return [[t, chunkId], chunkId]; 
        });
        let [tokenChunkIds, _chunkIds] = this.unzip(tokenChunkMap);
        let chunkIds = R.uniq(_chunkIds);
        console.log({chunkIds, tokenChunkIds});
        return {tokenChunkIds, chunkIds};
    }
    /**
     * return zero vector given the vec size
     * @param { Number } vecSize - positive integer indicates vector length
     * @returns { Array } zero vector
     */
    zeroVec(vecSize){
        return this.R.map(()=>0,this.R.range(0, vecSize));
    };
};
export default WordEmbeddingFunctorMixins;