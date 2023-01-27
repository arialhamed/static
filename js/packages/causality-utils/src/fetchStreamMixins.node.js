import fetch from 'cross-fetch';
/**
 * mixins function for fetch on node environment
 * @class
 * @param { Class } FetchClass
 * @returns { Class } Fetclass - class with extended methods
 */
const NodeStreamMixins = (FetchClass)=> class extends FetchClass{ 
    /**
     * @param { String } url - url for content
     * @returns { Readable } content
     * @memberof fetch
     */
    async streamData(url){
        const response = await fetch(url);
        if (response.status >= 400) {
            throw Error("Bad response from server");
        }
        return response.body;
    }
};
export default NodeStreamMixins;