import { Tensor, causalNetCore } from 'causal-net.core';
import { memDownCache } from 'causal-net.memcache';
/**
 * This class is under experimented
 * @experiment
 * @class CausalNetMemory
 * @extends {Tensor}
 */
class CausalNetMemory extends Tensor{
    constructor(){
        super();
        this.Memory = memDownCache;
        this.R = causalNetCore.CoreFunction;
    }
    set Memory(memory){
        //TODO: type checking 
        this.memory = memory;
    }
    get Memory(){
        if(!this.memory){
            throw Error(`memory is not set`);
        }
        return this.memory;
    }
    get MemorySize(){
        return this.memorySize;
    }
    set MemorySize(size){
        this.memorySize = size;
    }
    get NumSlots(){
        return this.memorySize[0];
    }
    get SlotSize(){
        
        return this.memorySize[1];
    }
    async initMemory(size, initTensor=null){
        this.MemorySize = size;
        const R = this.R;
        if(!initTensor){
            initTensor = await this.T.randomNormal(size);
        }        
        let slotIdxs = R.range(0, this.NumSlots);
        return this.writeSlots(slotIdxs, initTensor);
    }

    async normalize(){
        const Memory = this.Memory, NumSlots = this.NumSlots, R = this.R;
        let memValues = await Memory.recall(R.range(0, NumSlots));
        let allTs = this.T.tensor(memValues);
        let meanTs = allTs.mean(1, true);
        let stdTs = allTs.sub(meanTs).pow(2).mean(1, true).pow(0.5);
        return allTs.sub(meanTs).div(stdTs);    
    }

    async getMatchScore(slotIdxs){
        let normTs = await this.normalize();
        let cTs = normTs.gather(slotIdxs);
        let similarityScore = normTs.dot(cTs.transpose());
        return similarityScore;
    }

    async getTopKSimilar(slotIdxs, k){
        let matchScoreTensor = await this.getMatchScore(slotIdxs);
        const {values, indices} = matchScoreTensor.transpose().topk(k);
        return indices;
    }
    
    async writeSlots(slotIdxs, memoryTensor){   
        const R = this.R, SlotSize = this.SlotSize, Memory = this.Memory;
        let tensorData = await memoryTensor.data(); 
        let values = R.splitEvery(SlotSize, tensorData);
        for(let idx of R.range(0, slotIdxs.length)){
            await Memory.write(slotIdxs[idx], values[idx]);
        }
        return memoryTensor;
    }
    async readSlots(slotIndexs){
        const Memory = this.Memory, T = this.T;
        let values = [];
        for(let slotIdx of slotIndexs){
            let value = await Memory.read(slotIdx);
            values.push(value);
        }
        return T.variable(T.tensor(values));
    }
}

export default new CausalNetMemory();