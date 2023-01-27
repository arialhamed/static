/**
 * This LevelDownMixins class provide mixins for implement indexDB-based storage class 
 * with [leveldown](https://www.npmjs.com/package/leveldown) storage on node environment
 * @class LevelDownMixins
 * @extends {  StorageClass } 
 */
const LevelDownMixins = (StorageClass)=> class extends StorageClass{ 
    constructor(){
        super();
        try{
            this.connect('data');
        }
        catch(err){
            this.logger.log('indexDB fails to auto connect with storageName=\'data\', please call connect(\'storageName\') manually');
        }
        
    }
    /**
     * This method must be called to connect with leveldown storage once instance create
     * @param { String } storageName - storage name
     */
    connect(storageName){
        var leveldown = require('leveldown');
        this.store = this.levelup(leveldown(storageName));
    }
};
export default LevelDownMixins;
