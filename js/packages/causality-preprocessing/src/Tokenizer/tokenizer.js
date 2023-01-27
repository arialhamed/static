import { default as SentencePieceModel } from './sentencePiece';
import { jsonUtils } from 'causal-net.utils';
/**
 * This Tokenizer class is for tokenizer sentence
 * @experiment
 * @class Tokenizer
 * @example
 * [EXAMPLE ../../nlpPreprocessing.babel.js]
 */
class Tokenizer{
    constructor(){
        this.model = null;
        this.vocab = [];
    }
    async connect(link){
        this.vocab = await jsonUtils.queryJSON(link);
        this.model = new SentencePieceModel(this.vocab);
    }
    tokenize(text, asEncode=true){
        let wids =  this.encode(text);
        if(asEncode){
            return wids;
        }
        else{
            return wids.map(id=>this.vocab[id][0]);
        }
    }
    encode(text){
        if(!this.model){
            throw Error(`model is not loaded`);
        }
        return this.model.encode(text);
    }
}
var tokenizer = new Tokenizer();
export default tokenizer;