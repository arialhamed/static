import { Tensor } from 'causal-net.core'; 
import { assert } from 'causal-net.utils';
/**
 * This mixin class provides attributes: **Representation**.
 * @class RepresentationMixins
 * @extends  BasePipelineClass
 * @example
 * [EXAMPLE ../examples/embeddingMixins.babel.node.js]
 */
const RepresentationMixins = (BasePipelineClass)=> class extends BasePipelineClass{ 
    /**
     * Return Embedding instance
     *
     * @readonly
     * @memberof RepresentationMixins
     */
    get Representation(){
        if(!this.representation){
            throw Error('representation is not set');
        }
        return this.representation;
    }
    
    set Representation(representation){
        assert.beInstanceOf(representation, Tensor);
        this.representation = representation;
    }
    /**
     * Load configure of pretrained vector from either local folder or remote server. 
     * After connect, the result is cached for next time init.
     * @param { URL|FilePath } link - link to load
     * @param { boolean } [refresh=false] - force to discard local cache
     * @returns { Promise }
     * @memberof RepresentationMixins
     */
    async connect(){
        if(super.connect){
            super.connect();
        }
        let configureLink = this.embeddingConfig;
        this.logger.log(`representation connect to ${configureLink}`);
        await this.Representation.connect(configureLink);
    }
    /**
     * set embedding for pipeline
     * @param { Object } netConfig - contain Embedding instance and Embedding configure
     * @memberof RepresentationMixins
     */
    setRepresentationByConfig(netConfig){
        let { EmbeddingConfig, Embedding } = netConfig.Representation;
        assert.beInstanceOf(EmbeddingConfig, String);
        this.Representation = Embedding;
        this.embeddingConfig = EmbeddingConfig;
    }
};
export default RepresentationMixins;    