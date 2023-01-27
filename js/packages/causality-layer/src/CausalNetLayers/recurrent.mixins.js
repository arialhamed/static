const RecurrentMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * Convolutional layer
     * @param {Number} inputSize - size of net input
     * @param {Array} kernelSize - size of net output
     * @param {String|Function} activator - activator function can be customed or get from built-in by string name
     * @param {String} name - layer name, default by null
     * @returns { Object } layer
     */
    seq2vec({ inputSize, encodeSize, pad=0, attention = false, name=null }){
        name = this.checkName(name, 'seq2vec');
        const { Name, Reused } = this.checkName(name, 'convolution');
        const RNNCell = this.T.basicLSTMCell;
        const InitState = (batchSize, vecSize)=>([ this.T.zeros([batchSize, vecSize]), 
                                                   this.T.zeros([batchSize, vecSize]) ]);
        const AttentionParams = (attention)?{ AttWeight:[encodeSize, 1], AttBias: [1] }:{};
        const Parameters =  (Reused)?{ 
                LSTMKernel: [encodeSize + inputSize, encodeSize*4], 
                LSTMBias: [encodeSize*4], ...AttentionParams }:null;
        return { 
            Name, Type: 'Layer', Config: { inputSize, encodeSize, pad, name },
            Parameters,
            Net: (value, params, contexts)=>{
                    let { batchSize, seqLen } = contexts;
                    if(!(batchSize > 0 && seqLen > 0)){
                        throw Error(`expect { batchSize, seqLen } 
                                positive numbers get ${JSON.stringify(contexts)}`);
                    }
                    let { LSTMKernel, LSTMBias, AttWeight=null, AttBias=null } = params;
                    let [ h, c ] = InitState(batchSize, encodeSize);
                    let hiddens = [], prev_h = null, prev_c = null;
                    for(let idx=0; idx < seqLen; idx++){
                        let token = value.gather(idx, 1);
                        prev_h = h;
                        prev_c = c;
                        [ h, c ] = RNNCell(0.5, LSTMKernel, LSTMBias, token, h, c );
                        // h = h.mul(mask).add(prev_h);
                        // c = c.mul(mask).add(prev_c.mul(this.T.));
                        hiddens.push(h);
                    }
                    if(AttWeight && AttBias){
                        let attVecs = [];
                        for(let h of hiddens){
                            attVecs.push(h.matMul(AttWeight).add(AttBias).exp());
                        }
                        let attVecSum = this.T.concat(attVecs,1).sum(1, true);
                        let idx = 0, attH = null;
                        for(let h of hiddens){
                            if(idx===0){
                                attH = h.mul(attVecs[idx].div(attVecSum));
                            }
                            else{
                                attH = attH.add(h.mul(attVecs[idx].div(attVecSum)));
                            }
                            idx += 1;
                        }
                        return attH;
                    }
                    return h;
                }
            };
    }
    
    vec2seq({ encodeSize, outputSize, pad=0, name=null }){
        name = this.checkName(name, 'seq2vec');
        const RNNCell = this.T.basicLSTMCell;
        const InitState = (batchSize, vecSize)=>([ this.T.zeros([batchSize, vecSize]), 
                                                   this.T.zeros([batchSize, vecSize]) ]);
        return { 
            Name: name, Type: 'Layer',
            Config: {wordVecSize, encodeSize, pad, name },
            Parameters: { LSTMKernel: [encodeSize + wordVecSize, encodeSize*4], 
                          LSTMBias: [encodeSize*4], 
                          OutputWeight: [encodeSize, outputSize],
                          OutputBias: [outputSize]  },
            Net: (value, params, contexts)=>{
                    let { batchSize, seqLen, isTraining } = contexts;
                    if(isTraining){
                        throw Error(`expect { isTraining } 
                                a boolean get ${JSON.stringify(contexts)}`);
                    }
                    if(!(batchSize > 0 && seqLen > 0)){
                        throw Error(`expect { batchSize, seqLen } 
                                positive numbers get ${JSON.stringify(contexts)}`);
                    }
                    let { LSTMKernel, LSTMBias, OutputWeight, OutputBias } = params;
                    let [ h, c ] = InitState(batchSize, encodeSize);
                    if( isTraining ){
                        for(let idx=0; idx < seqLen; idx++){
                            let token = value.gather(idx, 1);
                            [ h, c ] = RNNCell(1, LSTMKernel, LSTMBias, token, h, c );  
                        }
                        return h;
                    }
                    else{
                        for(let idx=0; idx < seqLen; idx++){
                            let token = value.gather(idx, 1);
                            [ h, c ] = RNNCell(1, LSTMKernel, LSTMBias, token, h, c );  
                        }
                        return h;
                    }
                }
            };
    }
};
export default RecurrentMixins;