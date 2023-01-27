/**
 * @experiment
 */
const CategoryNormalizingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    oneHotEncode(sample, categories){
        const R = this.R;
        let code = this.zeros(categories.length);
        const idx = R.indexOf(sample, categories);
        if(idx>-1){
            code[idx] = 1;
        }
        return code;
    }
};

export default CategoryNormalizingMixins;