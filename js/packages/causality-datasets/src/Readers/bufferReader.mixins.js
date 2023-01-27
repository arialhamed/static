import { bufferUtils } from 'causal-net.utils';
const BufferReaderMixins = ( BaseDataSource ) => class extends BaseDataSource {
    makeBufferReader(baseLink, SplitFnLense=(d)=>(d)){
        return async (fileName) => {
            
            let chunkData = [];
            if( baseLink.startsWith('http') ){
                chunkData = await bufferUtils.fetchBuffer(baseLink + fileName);
            }           
            else{
                chunkData =  await bufferUtils.readBuffer(baseLink + fileName);
            }
            return SplitFnLense(chunkData);
        };
    }
};

export default BufferReaderMixins;