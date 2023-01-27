import platform from 'platform';
import process from 'process';

const platformMapping = (name)=>{
    if(name === 'Node.js'){
        return 'node';
    }
    else{
        return 'web';
    }
};
/**
 * This Platform class wrap [platform](https://www.npmjs.com/package/platform) 
 * for checking current platform either 'node' or 'web'. And advance mixins
 * @todo: extend more platform in future
 * @class Platform
 * @example
 * [EXAMPLE ../examples/platform.babel.js]
 */
class Platform{
    /**
     *Creates an instance of platform.
     * @memberof Platform
     */
    constructor(platform){
        this.platform = platform;
        if(typeof process !== 'undefined' && process.pid) {
            this.pid = process.pid;
        }
        else{
            this.pid = null;
        }
    }
    /**
     * return current process pid on node or `null` on web
     * @readonly
     * @memberof Platform
     */
    get PID(){
        return this.pid;
    }

    currentPlatform(){
        return this.platform.parse();
    }
    /**
     * Enhanced mixins for based class and list of mixins
     * @param { Class } BaseClass - base class
     * @param { List } mixins - list of mixins function
     * @returns { Class } 
     * @memberof Platform
     */
    mixWith(BaseClass, mixins){
        var mixinsList = [];
        if(Array.isArray(mixins)){
            mixinsList = mixins;
        }
        else{
            const PfName = platformMapping(platform.parse()['name']);
            mixinsList = mixins[PfName];
        }
        if(mixinsList === undefined){
            throw Error(`${PfName} not found in mixins`);
        }
        return mixinsList.reduce((c, mixin) => {
            if(typeof c === "function"){
                return mixin(c);
            }
            else{
                throw Error(`${JSON.stringify(c)} is not support mixins with ${BaseClass.name}`);
            }
        }, BaseClass);
    }
};

export default new Platform(platform);
