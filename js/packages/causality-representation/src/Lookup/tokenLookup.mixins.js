const TokenLookUpMixins = (BaseWordEmbeddingClass)=> class extends BaseWordEmbeddingClass{ 
    get TokenLookUp(){
        const MemCache = this.MemCache;
        return (token)=>{
            return new Promise(async (resolve, reject)=>{
                try{
                    let vec = await MemCache.getItem(this.embeddingSavePath + token);
                    resolve(vec);
                }
                catch(err){
                    resolve(null);
                }
            });
        };
    }
    /**
     * Update token look up
     * @param { String } token - token 
     * @param { Array } vec - vector representation of token
     */
    async updateTokenLookUp(token, vec){
        console.error('this is update');
        const MemCache = this.MemCache;
        await MemCache.setItem(this.embeddingSavePath + token, vec);
    }
};
export default TokenLookUpMixins;
