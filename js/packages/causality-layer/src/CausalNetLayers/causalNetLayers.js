import { Tensor as BaseTensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { default as DenseMixins } from './dense.mixins';
import { default as ConvolutionalMixins } from './convolution.mixins';
import { default as RecurrentMixins } from './recurrent.mixins';
/**
 * This class provides common used layers which can be accessed via **causalNetLayers** instance.
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayers
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/dense.layer.js]
 */
class CausalNetLayers extends platform.mixWith(BaseTensor, 
    [ DenseMixins, ConvolutionalMixins, RecurrentMixins ] ){
    constructor(){
        super();
        this.layerNames = [];
    }
    nameGenerator(layerType){
        const layerIdx = this.layerNames.length; 
        let newName = layerType + '/' + layerIdx;
        this.layerNames.push(newName);
        return newName;
    }

    checkName(name, layerType){
        if(!name){
            const Name = this.nameGenerator(layerType);
            return { Name, Reused: false };
        }
        else{
            const Reused = this.layerNames.indexOf(name)>-1;
            if(!Reused){
                this.layerNames.push(name);
            }
            return { Name:name, Reused };
        }
    }

    custom({Net, Parameters={}, name=null}){
        const { Name, Reused } = this.checkName(name, 'custom');
        if(Reused){
            Parameters = null;
        }
        return { Name, Type: 'Layer', Config: {name}, Parameters, Net };
    }
}

export default new CausalNetLayers();