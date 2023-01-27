import { default as  fetch } from './fetch';
import { default as CSV } from 'csv-parser';
import { default as stream } from './stream';
/**
 * This CSVUtils class use [csv-parser](https://www.npmjs.com/package/csv-parser)
 * for csv parsing and transform csv data from fetch.
 * @todo: verify on web environment
 * @class CSVUtils
 */
class CSVUtils{
    constructor(CSV, fetch){
        this.csv = CSV;
        this.fetch = fetch;
        this.fs = require('fs');
    }
    /**
     * return csv parser instance
     * @readonly
     * @memberof csvUtils
     */
    get CoreCSV(){
        return this.csv;
    }
    /**
     * fetch csv content from given url
     * @todo enhance reject case
     * @param { URL } url - url for csv content
     * @returns { Promise } - data promise with data if success
     * @memberof csvUtils
     */
    async fetchCSV(url){
        return new Promise(async (resolve, reject)=>{
            let reader = await fetch.streamData(url);
            let data = [];
            let csv = CSV();
            let csvHeaders = [];
            csv.on('headers', (headers) => csvHeaders=headers);
            csv.on('end', ()=>{resolve(data);});
            csv.on('data',(row)=>{
                data.push(csvHeaders.reduce((s,h)=>{
                    s[h]=row[h];
                    return s;
                },{}));
            });
            reader.pipe(csv);
        });
    }

    async writeCSV(header, data, filePath){
        const fs = this.fs;        
        if(!fs.createWriteStream){
            throw Error('method is not supported');
        }
        return new Promise((resolve, reject)=>{
            let reader = stream.makeReadable();
            reader.pipe(fs.createWriteStream(filePath))
                    .on('close', ()=>{ resolve(filePath); })
                    .on('error', ()=>{ reject(`error or read png data from file ${filePath}`); });
            let strHeader = header.join(',');
            reader.push(strHeader);
            data.forEach(row=>{ 
                let strRow = '\n'+header.map(h=>{
                    let col = row[h];
                    if(col.match(/[\s,"]/)){
                        return '"' + col.replace(/"/g, '""') + '"';
                    }
                    return col;
                }).join(',');
                reader.push(strRow);
            });
            reader.push(null);
        });
    }

    async readCSV(filePath){
        const fs = this.fs, CSV = this.csv;
        if(!fs.createReadStream){
            throw Error('method is not supported');
        }
        return new Promise((resolve, reject)=>{
            let data = [];
            let csv = CSV();
            let csvHeaders = [];
            csv.on('headers', (headers) => csvHeaders=headers);
            csv.on('end', ()=>{resolve(data);});
            csv.on('data',(row)=>{
                data.push(csvHeaders.reduce((s,h)=>{
                    s[h]=row[h];
                    return s;
                },{}));
            });
            fs.createReadStream(filePath).pipe(csv);
        });
    }

    async chunkCSV(filePath, recordPerChunk, destFilePattern){
        let data = await this.readCSV(filePath);
        let headers = Object.keys(data[0]), writeCounter = 0;
        const writeFile = async (headers, data)=>{
            let outFile = destFilePattern.replace('{}', writeCounter);
            await this.writeCSV(headers, data, outFile);
            writeCounter += 1;
            return writeCounter;
        };
        for(let chunkIdx=0, len=data.length; chunkIdx<len; chunkIdx+=recordPerChunk) {
            let chunkData = data.slice(chunkIdx,chunkIdx+recordPerChunk);
            await writeFile(headers, chunkData);
        };
        return writeCounter;
    }
}
export default new CSVUtils(CSV, fetch);