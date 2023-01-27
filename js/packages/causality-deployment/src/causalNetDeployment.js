import { Event } from 'causal-net.core';
import { default as functor } from './functor';
import { platform } from 'causal-net.utils';
/**
 * The implementation for event-based model deployment which is supplied 
 * to pipeline class instance as **Deployment** attribute. Pipeline class must be mixed with DeploymentMixins.
 * @class CausalNetDeployment
 * @extends Event
 * @example
 * [EXAMPLE ../examples/causalNetDeployment.babel.js]
 */
class CausalNetDeployment extends platform.mixWith( Event, [] ){
    
    constructor(functor){
        super();
        this.F = functor;
        this.R = functor.CoreFunctor;
    }

    set Emitter(emitter){
        this.deployEmitter = emitter;
    }

    get Emitter(){
        if(!this.deployEmitter){
            throw Error('Emitter is not set');
        }
        return this.deployEmitter;
    }

    set Listener(listener){
        this.deployListener = listener;
        this.on('inferencer', (infer)=>{
            this.deployListener(infer);
        });
        this.on('ensembleInferencer', (infer)=>{
            this.deployListener(infer);
        });
    }
    
    get Listener(){
        if(!this.deployListener){
            throw Error('Listener is not set');
        }
        return this.deployListener;
    }

    set Inferencer(inferencer){
        this.deployInferencer = inferencer;
        this.on('emitter', async (emitValue)=>{
            let inferValue = await this.deployInferencer(emitValue);
            if(inferValue && inferValue !== {}){
                this.emit('inferencer', inferValue);
            }
        });
    }

    get Inferencer(){
        if(!this.deployInferencer){
            throw Error('Inferencer is not set');
        }
        return this.deployInferencer;
    }

    set EnsembleInferencer(ensembleInferencer){
        this.deployEnsembleInferencer = ensembleInferencer;
        this.on('emitter', async (emitValue)=>{
            let inferValue = await this.deployEnsembleInferencer(emitValue);
            if(inferValue && inferValue !== {}){
                this.emit('ensembleInferencer', inferValue);
            }
        });
    }

    get EnsembleInferencer(){
        if(!this.deployEnsembleInferencer){
            throw Error('EnsembleInferencer is not set');
        }
        return this.deployEnsembleInferencer;
    }

    async deploy(){
        return new Promise(async (resolve, reject)=>{
            let counter = 0;
            let emitValue = await this.Emitter();
            while(emitValue !== null){
                this.emit('emitter', emitValue);
                counter += 1;
                emitValue = await this.Emitter();
            }
            resolve(counter);
        });
    }
}

export default new CausalNetDeployment(functor);