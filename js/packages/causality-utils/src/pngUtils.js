import { default as  fetch } from './fetch';
import { PNG } from 'pngjs3';
/**
 * This PNGUtils class use [pngjs3](https://www.npmjs.com/package/pngjs3)
 * for png parsing and transform png data from fetch.
 * @class pngUtils
 */
class PNGUtils{
    constructor(PNG){
        this.png = PNG;
        this.fs = require('fs');
    }
    /**
     * get pngjs3 instance
     * @readonly
     * @memberof PNGUtils
     */
    get CorePNG(){
        return this.png;
    }
    /**
     * fetch and tranform png file to raw array from url
     * @param { URL } url - url for PNG file
     * @returns { Promise } data promise - return Array if success or reject with error message
     * @memberof PNGUtils
     */
    async fetchPNG(url){
        return new Promise(async (resolve, reject)=>{
            let reader = await fetch.streamData(url);
            let png = new PNG();
            png.on('parsed', function(){
                resolve(this.data);
            });
            png.on('error',(err)=>{
                console.error(err);
                reject(err);
            });
            reader.pipe(png);
        });
    }
    /**
     * write and tranform png file to raw array from filepath
     * @param { URL } url - url for PNG file
     * @returns { Promise } data promise - return Array if success or reject with error message
     * @memberof PNGUtils
     */
    async writePNG(data, size, filePath){
        const fs = this.fs;
        if(!fs.createWriteStream){
            throw Error('method is not supported');
        }
        return new Promise((resolve, reject)=>{
            const [width, height, depth] = size;
            let png = new PNG({ filterType: depth, width: width, height: height });
            png.data = data;
            png.pack().pipe(fs.createWriteStream(filePath))
                    .on('close', ()=>{ resolve(filePath); })
                    .on('error', ()=>{ reject(`error or read png data from file ${filePath}`); });
        });
    }
    /**
     * read and tranform png file to raw array from filepath
     * @param { String } filePath - url for PNG file
     * @returns { Promise } data promise - return Array if success or reject with error message
     * @memberof PNGUtils
     */
    async readPNG(filePath){
        const fs = this.fs;
        if(!fs.createReadStream){
            throw Error('method is not supported');
        }
        return new Promise((resolve, reject)=>{
            fs.createReadStream(filePath)
                .pipe(new PNG())
                .on('parsed', function() {
                    resolve(this.data);
                })
                .on('error', ()=>{
                    reject(`error or read png data from file ${filePath}`);
                });
        });
    }
}
export default new PNGUtils(PNG);