/**
 * This MemorizingMixins class is a mixins class for implement memory methods
 * @class MemorizingMixins
 * @experiment
 * @extends BaseMemCacheClass
 */
const MemorizingMixins = (BaseMemCacheClass)=> class extends BaseMemCacheClass{
    /**
     * Read content from 
     * @experiment
     * @param { String|Number } memorySlotIndex - memory slot index
     * @returns
     */
    async read(memorySlotIndex){
        const GetFromMemory = async (memorySlotIndex)=>{
            try{
                let data = await this.getItem(memorySlotIndex);
                return Object.values(data)[0];
            }
            catch(err){
                return null;    
            }
        };
        return await GetFromMemory(memorySlotIndex);
    }
    /**
     * 
     * @param { String|Number } memorySlotIndex - positive number for memory slot
     * @param { Array } memory value
     * @returns { Promise } memory slot index value
     */
    async write(memorySlotIndex, value){
        return await this.setItem(memorySlotIndex, value);
    }
    /**
     *
     *
     * @param {*} slotIdxs
     * @returns
     */
    async recall(slotIdxs){
        let memory = [];
        for(let slotIdx of slotIdxs){
            memory.push(await this.read(slotIdx));
        }
        return memory;
    }
};
export default MemorizingMixins;