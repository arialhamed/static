import { default as  fetch } from './fetch';
import { default as json5 } from 'json5';
/**
 * This JSONUtils class provide wrapper for 
 * [json5](https://www.npmjs.com/package/json5)
 * for fetch/write/read json
 * @todo: verify on web environment
 * @class JSONUtils
 */
class JSONUtils{
    constructor(json5, fetch){
        this.json = json5;
        this.fetch = fetch;
        this.fs = require('fs');
    }
    /**
     * return json5 instance
     * @readonly
     * @memberof JSONUtils
     */
    get CoreJSON(){
        return this.json;
    }
    /**
     * fetch json content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof JSONUtils
     */
    async fetchJSON(url){
        return await fetch.fetchJson(url);
    }

    /**
     * write json content from given content
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof JSONUtils
     */
    async writeJSON(data, filePath){
        const fs = this.fs, json = this.json;
        if(!fs.writeFile){
            throw Error('method is not supported');
        }
        return new Promise(async (resolve, reject)=>{
            fs.writeFile(filePath, json.stringify(data), (err)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(filePath);
                }
            });
        });
    }

    /**
     * fetch json content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof JSONUtils
     */
    async readJSON(filePath){
        const fs = this.fs, json = this.json;
        if(!fs.readFile){
            throw Error('method is not supported');
        }
        return new Promise(async (resolve, reject)=>{
            fs.readFile(filePath, (err, data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(json.parse(data));
                }
            });
        });
    }

    async queryJSON(link){
        if(link.startsWith('http')){
            return await this.fetchJSON(link);
        }
        else{
            return await this.readJSON(link);
        }
    }
}

const jsonUtils = new JSONUtils(json5, fetch);
export default jsonUtils;