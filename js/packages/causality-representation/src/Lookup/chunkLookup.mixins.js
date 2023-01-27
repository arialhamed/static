/**
 * This ChunkLookupMixins class provide mixins for chunk lookup that first look from the cached chunk then
 * fetch and cache new chunk
 * @class ChunkLookupMixins
 * @extends {  BaseWordEmbeddingClass } 
 */
const ChunkLookupMixins = ( BaseWordEmbeddingClass )=> class extends BaseWordEmbeddingClass{ 
    
    /**
     * Return the storage lookup function
     * @readonly
     */
    get ChunkLookUp(){
        const Storage = this.Storage;
        return (chunkId)=>{
            return new Promise(async (resolve, reject)=>{
                try{
                    const ChunkPath = this.embeddingSavePath + chunkId;
                    let chunkItem = await Storage.getItem(ChunkPath);
                    let chunk = chunkItem[ChunkPath];
                    resolve(JSON.parse(chunk));
                }
                catch(err){
                    resolve(null);
                }
            });
        };
    }
   /**
    * Update the storage lookup
    * @param { String|Number } chunkId - id in positive integer range
    * @param { Object } chunk - chunk object containing token keys and correponding vec value
    * @returns { String } - updated chunk path in storage
    */
   async updateChunkLookUp(chunkId, chunk){
        const Storage = this.Storage;
        const UpdateChunkPath = this.embeddingSavePath + chunkId;
        return await Storage.setItem(UpdateChunkPath, chunk);
    }
    /**
     * Query chunk either read from file or fetch from remote server
     * @param { String|Number } chunkId - id in positive interger range
     * @returns { Object }  chunk object containing token keys and correponding vec value
     */
    async queryChunk(chunkId){
        const ChunkUrl = `${this.baseLink}wordvec_chunk_${chunkId}.json`;
        return await this.query(ChunkUrl);
    }
   
};
export default ChunkLookupMixins;