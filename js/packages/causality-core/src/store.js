/**
 * class Store is the primitive class for composing higher storage class.
 * This class wrap [levelup](https://www.tensorflow.org/js) 
 * for connect with abstract-leveldown compliant stores.
 * @class Store
 */
export default class Store{
    
    constructor(){
        this.levelup = require('levelup');
        this.logger = console;
    }
    
    async connect(){
        throw Error('implement required');
    }

    /**
     * Get item given the key
     * @param { String } key - key name
     * @param {boolean} [asBuffer=false] - return object or buffer array, default object
     * @returns { Object } item object 
     */
    async getItem(key, asBuffer=false, noError=false){
        if(!this.store){
            throw Error('store is not connect');
        }
        return new Promise((resolve, reject)=>{
            this.store.get(key, {asBuffer}, (err, data)=>{
                if(err){
                    if(noError){
                        resolve({[key]: null});
                    }
                    else{
                        this.logger.debug({key, err});
                        reject('error read');
                    }
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    /**
     * Set new item with the given key and value
     * @param { String } key - key name of item
     * @param { Object } data - value of item
     * @returns { Promise } - new key promise
     * @memberof MemoryCache
     */
    async setItem(key, data, noError=false){
        if(!this.store){
            throw Error('store is not connect');
        }
        return new Promise((resolve, reject)=>{
            this.store.put(key, data, (err)=>{
                if(err){
                    if(noError){
                        resolve({[key]: null});
                    }
                    else{
                        this.logger.debug({key, err});
                        reject('error write');
                    }
                }
                else{
                    resolve({[key]: data});
                }
            });
        });
    }
    /**
     * Delete item given the item key
     * @param { String } key - key name to delete
     * @returns { Promise } deleted key promise
     * @memberof MemoryCache
     */
    async delItem(key, noError=false){
        if(!this.store){
            throw Error('store is not connect');
        }
        return new Promise((resolve, reject)=>{
            this.store.del(key, (err)=>{
                if(err){
                    if(noError){
                        resolve(null);
                    }
                    else{
                        this.logger.debug(err);
                        reject(`error delete ${key}`);
                    }
                }
                else{
                    resolve(key);
                }
            });
        });
    }
    /**
     * Make name maching function based on prefix path
     * @param { String } pattern - prefix name
     * @returns { Function } name matching function
     * @memberof MemoryCache
     */
    makeCheckItemNameFn(pattern){
        var regex = new RegExp(`${pattern}.*`,'g');
        return (fileName)=>fileName.match(regex) || [];
    }
    
    /**
     * Get the current items under the prefix path
     * @param { String } namePrefix
     * @returns { Array } list of item names
     * @memberof MemoryCache
     */
    async getItemList(namePrefix, noError=false){
        if(!this.store){
            throw Error('store is not connect');
        }
        const NameTester = this.makeCheckItemNameFn(namePrefix);
        return new Promise((resolve, reject)=>{
            let fileList = [];
            this.store.createKeyStream()
                .on('data', (key) =>{
                    key = key.toString('utf8');
                    if(NameTester(key).length===1){
                        fileList.push(key);
                    }
                })
                .on('close', () => resolve(fileList) )
                .on('end',  () => resolve(fileList) )
                .on('error', (err) =>{ 
                    if(noError){
                        resolve(fileList);
                    }
                    else{
                        this.logger.debug( err );
                        reject(`error getItemList ${namePrefix}`);
                    }
                });
        });
    }
}