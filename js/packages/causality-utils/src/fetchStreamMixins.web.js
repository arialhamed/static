import fetchStream from 'fetch-readablestream';

/**
 * provide streamData method for web environment
 * @class
 * @param { Class } FetchClass
 * @returns { Class } FetchClass - class with extended methods
 */
import { default as streamUtils } from './stream';
const WebStreamMixins = (FetchClass)=> class extends FetchClass{ 
    /**
     * Stream content given the url
     * @param { String } url - url for content
     * @returns { Readable } content
     */
    async streamData(url){
        let response = await fetchStream(url);
        if(response.status >= 400){
            console.error(response.status);
            reject("Bad response from server");
        }
        const streamReader = response.body.getReader();
        let reader = streamUtils.makeReadable();
        const recusiveRead = ()=>{
            return new Promise((resolve, reject)=>{
                streamReader.read().then(({ value, done })=>{
                    if (done) {
                        reader.push(null);
                        resolve(false);
                    }
                    else{
                        reader.push(Buffer.from(value));
                        resolve(true);
                    }
                });
            });
        };
        const ReadNext = (recusiveRead)=>{
            recusiveRead().then(hasNext=>{
                if(hasNext){
                    ReadNext(recusiveRead);
                }
            });
        };
        ReadNext(recusiveRead);
        return reader;
    }
};

export default WebStreamMixins;