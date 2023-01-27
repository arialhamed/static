import { Store as BaseStorage } from 'causal-net.core';
import { assert } from 'causal-net.utils';
/**
 * This indexDBStorage class is the default consistent storage based on 
 * [leveldown](https://www.npmjs.com/package/leveldown) storage 
 * with support file extends: png, csv, text by those corresponding mixins.
 * mixWith:
 *  - 'node': [LevelDownMixins, TextFileMixins, PNGFileMixins, CSVFileMixins],
 *  - 'web': [LevelJSMixins, TextFileMixins, PNGFileMixins, CSVFileMixins]
 * @class IndexDBStorage
 * @extends {  BaseStorage } 
 * @example
 * [EXAMPLE ../examples/storage.mixins.babel.js]
 */
const StorageMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    /**
     * return file list of current storage
     * @returns
     */
    async storageSummary(){
        let storage = this.Storage;
        return await this.storage.getFileList();
    }
    
    /**
     * set storage instance to pipeline
     * @param { Object } - storage instance
     */
    set Storage(storage){
        assert.beInstanceOf(storage, BaseStorage);
        this.storage = storage;
    }
    
    /**
     * get current storage
     * @readonly
     */
    get Storage(){
        if(!this.storage){
            throw Error('storage is not set');
        }
        return this.storage;
    }
};
export default StorageMixins;