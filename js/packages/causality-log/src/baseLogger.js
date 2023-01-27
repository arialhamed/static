/**
 * This BaseLogger class provided abstract class for extending new logger class
 * @class BaseLog
 */
class BaseLogger{
    constructor(){
        this.AcceptedLevels = {debug: 0, log:1, warn:2, error: 3};
        this.rAcceptedLevels = {0:'debug', 1: 'log', 2: 'warn', 3: 'error'};
        this.level = this.AcceptedLevels['debug'];
    }
    set Level(level){
        if(this.AcceptedLevels[level]!==undefined){
            this.level = this.AcceptedLevels[level];    
        }
        else{
            throw Error(`${level} must be one of ${Object.keys(this.AcceptedLevels)}`);
        }
    }
    get Level(){
        return this.rAcceptedLevels[this.level];
    }

    connect(){
        throw Error('implement required');
    }

    log(message){
        throw Error('implement required');
    }
    
    warn(message){
        throw Error('implement required');
    }
    
    error(message){
        throw Error('implement required');
    }

    debug(message){
        throw Error('implement required');
    }

    groupBegin(name){
        throw Error('implement required');
    }

    groupEnd(){
        throw Error('implement required');
    }

    progressBegin(range){
        throw Error('implement required');
    }

    progressUpdate(message){
        throw Error('implement required');
    }

    progressEnd(message){
        throw Error('implement required');
    }
}

export default BaseLogger;