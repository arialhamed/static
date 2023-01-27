import { pngUtils } from 'causal-net.utils';
const PNGReaderMixins = ( BaseDataSource ) => class extends BaseDataSource {
    makePNGReader(baseLink, SplitFnLense=(d)=>(d)){
        return async (fileName) => { 
            let chunkData = [];
            if( baseLink.startsWith('http') ){
                chunkData = await pngUtils.fetchPNG(baseLink + fileName); 
            }
            else{
                chunkData = await pngUtils.readPNG(baseLink + fileName);
            }
            return SplitFnLense(chunkData);
        };
    }
};

export default PNGReaderMixins;