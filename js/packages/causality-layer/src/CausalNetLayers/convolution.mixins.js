const ConvolutionMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * Convolutional layer
     * @param {Number} inputSize - size of net input
     * @param {Array} kernelSize - size of net output
     * @param {String|Function} activator - activator function can be customed or get from built-in by string name
     * @param {String} name - layer name, default by null
     * @returns { Object } layer
     */
    convolution({ kernelSize, filters, 
                  strides=1, padding='same',
                  dilations=[1,1], flatten=false, 
                  activator='sigmoid', name=null}){
        const { Name, Reused } = this.checkName(name, 'convolution');
        if(Reused){
            Parameters = null;
        }
        else{
            Parameters = { Kernel: [...kernelSize, ...filters] };
        }
        const FConv = this.T.conv2d;
        const shapeType = 'NHWC';
        return { 
            Name, Type: 'Layer',
            Config: { kernelSize, filters, strides, padding, dilations, 
                      flatten, activator, shapeType },
            Parameters,
            Net: (value, params, contexts)=>{
                    let { Kernel } = params;
                    let result = FConv(value, Kernel, strides, padding, shapeType, dilations);
                    if(typeof activator === "string"){
                        result = result[activator]();
                    }
                    else{
                        result = activator(result);
                    }  
                    if(flatten){
                        const { batchSize } = contexts;
                        result = result.reshape([batchSize, -1]);
                    }
                    return result;
                }
            };
    }
};
export default ConvolutionMixins;