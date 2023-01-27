import { platform } from 'causal-net.utils';
import { Store as BaseStorage } from 'causal-net.core';
import { default as PNGFileMixins } from './PNGFile.mixins';
import { default as TextFileMixins } from './textFile.mixins';
import { default as CSVFileMixins } from './CSVFile.mixins';
import { default as LevelDownMixins } from './indexDBStorage.mixins.node';
import { default as LevelJSMixins } from './indexDBStorage.mixins.web';

/**
 * This indexDBStorage class is the default consistent storage based on 
 * [leveldown](https://www.npmjs.com/package/leveldown) storage 
 * with support file extends: png, csv, text by those corresponding mixins.
 * { mixWith: { 'node': [LevelDownMixins, TextFileMixins, PNGFileMixins, CSVFileMixins],
 *              'web': [LevelJSMixins, TextFileMixins, PNGFileMixins, CSVFileMixins] } }
 * @class IndexDBStorage
 * @extends {  BaseStorage } 
 * @example
 * [EXAMPLE ../examples/storage.babel.js]
 */
class IndexDBStorage extends platform.mixWith( BaseStorage, 
                       { 'node': [LevelDownMixins, TextFileMixins, PNGFileMixins, CSVFileMixins],
                          'web': [LevelJSMixins, TextFileMixins, PNGFileMixins, CSVFileMixins] } ){
    
    correctName(filePath){
        filePath = '/' +filePath;
        return filePath.replace(/\/{1,}/g, '/');
    }
    /**
     * Batch operation with Array of ops
     * @param { String } key
     * @returns { Promise } key promise
     * @memberof IndexDBStorage
     * @example
     *  let ops = [
     *   { type: 'put', key: 'temp', value: '123445' },
     *   { type: 'del', key: 'temp' }];
     *  //batch does not support 'get' type
     *  let batchResult = await indexDBStorage.batch(ops);
     */
    async batch(ops){
        return new Promise((resolve, reject)=>{
            this.store.batch(ops, (err, data)=>{
                if(err){
                    this.logger.log({ops, err});
                    reject('error ops');
                }
                else{
                    resolve(ops);
                }
            });
        });
    }
    /**
     * get list of file base on prefix
     * @param { String } filePath
     * @return { Promise } List of filenames 
     * @memberof IndexDBStorage
     */
    async getFileList(filePath){
        filePath = this.correctName(filePath);
        return await this.getItemList(filePath);
    }

    /**
     * delete all files with name match prefix pattern 
     * return list of deleted files
     * @param { String } filePath - pattern of file path
     * @returns { Promise } deleted files list promise
     * @memberof IndexDBStorage
     */
    async deleteFileByPrefix(filePath){
        filePath = this.correctName(filePath);
        const DelOp = (key)=>({type: 'del', key: key});
        let fileList = await this.getFileList(filePath);
        let delFileOps = fileList.map(f=>DelOp(f));
        return await this.batch(delFileOps);
    }
}

export default new IndexDBStorage();