import { default as  fetch } from './fetch';
/**
 * This BufferUtils class provide methods
 * for fetch/write/read buffer
 * @todo: verify on web environment
 * @class BufferUtils
 */
class BufferUtils{
    
    constructor(fetch){
        this.fetch = fetch;
        this.fs = require('fs');
    }
    
    /**
     * fetch buffer content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof BufferUtils
     */
    async fetchBuffer(url){
        let data = await fetch.fetchData(url);
        return await new Buffer.from(data);
    }

    /**
     * write buffer content from given content
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof BufferUtils
     */
    async writeBuffer(data, filePath){
        const fs = this.fs;
        if(!fs.writeFile){
            throw Error('method is not supported');
        }
        return new Promise(async (resolve, reject)=>{
            fs.writeFile(filePath, data, (err)=>{
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
     * fetch buffer content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof BufferUtils
     */
    readBuffer(filePath){
        const fs = this.fs;
        if(!fs.readFile){
            throw Error('method is not supported');
        }
        return new Promise(async (resolve, reject)=>{
            fs.readFile(filePath, (err, data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(Buffer.from(data));
                }
            });
        });
    }
}
export default new BufferUtils();