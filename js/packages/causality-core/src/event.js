import { EventEmitter } from 'events';
/**
 * class Event is the primitive class for composing higher event-based class. 
 * @export {EventEmitter}
 * @class Event
 * @extends {EventEmitter}
 * @example
 * [EXAMPLE ../examples/event.babel.js]
 */
export default class Event extends EventEmitter{
    constructor(){
        super();
    }

    async emit(name, data){
        return new Promise((resolve, reject)=>{
            super.emit(name, data, (msg)=>{
                resolve(msg);
            });
        });
    }

    on(name, handler, bypass=false){
        const Handler = bypass?handler:(data, cb)=>{
            let message = handler(data);
            cb(message);
        };
        super.on(name, Handler);
    }

    pipe(destStream){
        let events = destStream.eventNames();
        for(let event of events){
            this.on(event, async (data, cb)=>{ 
                let message = await destStream.emit(event, data);
                cb(message);
            }, true);
        }
    }
}