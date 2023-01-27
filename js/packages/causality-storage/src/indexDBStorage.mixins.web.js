/**
 * This LevelJSMixins class provide mixins for implement indexDB-based storage class 
 * with [level-js](https://www.npmjs.com/package/level-js) storage on web environment
 * @class LevelDownMixins
 * @extends {  StorageClass } 
 */
const LevelJSMixins = (StorageClass)=> class extends StorageClass{ 
    constructor(){
        super();
        this.connect('data');
    }
    /**
     * This method must be called to connect with level-js storage once instance create
     * @param { String } storageName - storage name
     */
    connect(storageName){
        var leveljs = require('level-js');
        this.store = this.levelup(leveljs(storageName));
    }
};
export default LevelJSMixins;