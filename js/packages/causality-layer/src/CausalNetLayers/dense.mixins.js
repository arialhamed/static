const DenseLayerMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * Simple dense layer
     * @param {Number} inputSize - size of net input
     * @param {Number} outputSize - size of net output
     * @param {String|Function} activator - activator function can be customed or get from built-in by string name
     * @param {String} name - layer name, default by null
     * @returns { Object } layer
     */
    dense({inputSize, outputSize, activator='sigmoid', withBias=true, transpose=false, name=null}){
        const { Name, Reused } = this.checkName(name, 'convolution');
        let BiasParams = (withBias)?{Bias: [outputSize]}:{};
        const Parameters = (Reused)?null: { Weight: [inputSize, outputSize], ... BiasParams };
        return { 
            Name, Type: 'Layer',
            Config: { inputSize, outputSize, activator }, Parameters,
            Net: (value, params, contexts)=>{
                    let {Weight, Bias} = params;
                    let result = (transpose)?value.dot(Weight.transpose()):value.dot(Weight);
                    if(Bias){
                        result = result.add(Bias);
                    }
                    if(activator === null){
                        return result;
                    }
                    else{
                        if(typeof activator === "string"){
                            return result[activator]();
                        }
                        else{
                            return activator(result);
                        }   
                    } 
                }
            };
    }

    
};
export default DenseLayerMixins;