/**
 * @experiment
 */
const ItemNormalizingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    itemNormalize(sample){
        throw Error('implement require');
    }
};

export default ItemNormalizingMixins;