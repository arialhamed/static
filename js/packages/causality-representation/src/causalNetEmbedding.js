import { Tensor as BaseTensor } from 'causal-net.core';
import { platform, fetch, jsonUtils } from 'causal-net.utils';
import { StorageMixins, indexDBStorage } from 'causal-net.storage';
import { MemCacheMixins, memDownCache } from 'causal-net.memcache';
import { default as WordEmbeddingMixins } from './wordEmbedding.mixins';
import { default as ChunkLookUpMixins } from './Lookup/chunkLookup.mixins';
import { default as TokenLookUpMixins } from './Lookup/tokenLookup.mixins';
import { default as VectorMetricMixins } from './vectorMetrics.mixins';
import { default as functor } from './functor';
/**
 * This CausalNetEmbedding provide methods for transform raw tokenized sentence into 
 * its single vector representation
 * mixWith:
 *         [   StorageMixins, 
 *             MemCacheMixins,
 *             TokenLookUpMixins,
 *             ChunkLookUpMixins,
 *             WordEmbeddingMixins ])}
 * @class CausalNetEmbedding
 * @extends  BaseTensor
 * @example
 * [EXAMPLE ../examples/causalNetEmbedding.babel.node.js]
 */
class CausalNetEmbedding extends platform.mixWith(BaseTensor, 
        [   StorageMixins, 
            MemCacheMixins,
            TokenLookUpMixins,
            ChunkLookUpMixins,
            VectorMetricMixins,
            WordEmbeddingMixins ]){
    constructor(fetch, storage, cache, functor){
        super();
        this.fetch = fetch;
        this.Storage = storage;   //store configure
        this.MemCache = cache;    //store chunks
        this.F = functor;
        this.R = this.F.CoreFunctor;
        this.embeddingSavePath = '/embedding/';
        this.embeddingDescriptionPath = this.embeddingSavePath + 'description.json';
    }
    /**
     * Return veczie in positive number
     *
     * @readonly
     * @memberof CausalNetEmbedding
     */
    get VecSize(){
        if(!this.vecsize){
            throw Error('vecsize is not set');
        }
        return this.vecsize;
    }
    /**
     * Load configure of pretrained vector from either local folder or remote server. 
     * After connect, the result is cached for next time init.
     * @param { URL|FilePath } link - link to load
     * @param { boolean } [refresh=false] - force to discard local cache
     * @returns { Promise }
     * @memberof CausalNetEmbedding
     */
    async connect(link, refresh=false){
        this.baseLink = link;
        return await this.getDescription(refresh);
    }
    /**
     * This method is called by connect
     * @private
     * @param {boolean} [forceFecth=false]
     * @returns
     * @memberof CausalNetEmbedding
     */
    async getDescription(forceFecth=false){
        if(!this.description){
            try{
                let descriptionItem = await this.Storage.getItem(this.embeddingDescriptionPath);
                this.description = JSON.parse(descriptionItem[this.embeddingDescriptionPath]);
            }
            catch(err){
                this.logger.debug({'load description from storage': false});
                this.description = await this.queryDescription();
            }
        }
        if(forceFecth){
            this.description = await this.queryDescription();
        }
        this.TokenChunkIdMapper = (token)=>{
            return this.F.getIn([token], this.description.chunkLookUp, null);
        };
        this.vecsize = this.description.vecsize;//only set from here
        return this.description;
    }
    /**
     * fetch or read configure depends on provied link format
     * @private
     * @param {*} link
     * @returns
     * @memberof CausalNetEmbedding
     */
    async query(link){
        if(link.startsWith('http')){
            return await jsonUtils.fetchJson(link);
        }
        else{
            return await jsonUtils.readJSON(link);
        }
    }
    /**
     * query the description json 
     * @private
     * @returns { Object } description json object
     * @memberof CausalNetEmbedding
     */
    async queryDescription(){
        const DescriptionLink = this.baseLink + 'wordvec.description.json';
        this.logger.debug({ DescriptionLink });
        var description = this.query(DescriptionLink);
        await this.Storage.setItem(this.embeddingDescriptionPath, JSON.stringify(description));
        this.description = description;
        return this.description;
    }
}

export default new CausalNetEmbedding(fetch, indexDBStorage, memDownCache, functor);