import fetch from 'cross-fetch';
import { default as platform } from './platform';
import { default as NodeStreamMixins } from './fetchStreamMixins.node';
import { default as WebStreamMixins } from './fetchStreamMixins.web';

class Basefetch{
    constructor(fetch){
        this.fetch = fetch;
    }
}

/**
 * This isomorphic fetch class is mixed with:
 * - NodeStreamMixins  
 * - WebStreamMixins
 * @class Fetch
 * @extends Basefetch
 */
class Fetch extends platform.mixWith(Basefetch, {'node': [NodeStreamMixins], 'web':[WebStreamMixins]}){
    constructor(fetch){
        super(fetch);
    }
    /**
     * fetch text content given the url
     * @param { String } url
     * @returns { Promise } promise of content
     */
    fetchData(url){
        return new Promise((resolve, reject)=>{
            fetch(url).then(response=>{
                if (response.status >= 400) {
                    console.error(response.status);
                    reject("Bad response from server");
                }
                resolve(response.text());
            });
        });
    }
    /**
     * fetch json content given the url 
     * @param { String } url
     * @returns { promise } promise of content
     */
    fetchJson(url){
        return new Promise(async (resolve, reject)=>{
            fetch(url).then(response=>{
                if (response.status >= 400) {
                    console.error(response.status);
                    reject("Bad response from server");
                }
                resolve(response.json());
            });
        });
    }
}

export default new Fetch(fetch);