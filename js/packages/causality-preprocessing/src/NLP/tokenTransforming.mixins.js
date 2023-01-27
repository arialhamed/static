const TokenTransformingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    /**
     * tokenized sentence
     * @param { String } sentence - array of string sentence
     * @returns { Array } array of tokenized sentences
     */
    tokenize(sentence){
        const R = this.R, Tokenizer = this.tokenizer;
        return Tokenizer.tokenize(sentence);
    }
    /**
     * Remove bad words from tokens
     * @param { Array } tokens - array of string token
     * @param { Array } badWordList - Array of bad words
     * @returns { Array } tokens without bad words
     */
    badWordsFilter(tokens, badWordList){
        const R = this.R;
        return R.filter((token)=>R.not(R.find(R.equals(token))(badWordList)), tokens);
    }
    /**
     * Count number of apperance of each token in the token list
     * @param { Array } tokens - array of string tokens
     * @param { Object } [freqCount={}] - objec or previous wordFreqCount, empty object if not provided
     * @returns { Object } - json object with token as key and counting number as corresponding value
     */
    wordFreqCount(tokens, freqCount={}){
        const R = this.R;
        const UpdateFreq = (freqCount, token)=>{
            if(freqCount[token] === undefined){
                freqCount[token] = 1;
            }
            else{
                freqCount[token] += 1;
            }
            return freqCount;
        };
        return R.reduce(UpdateFreq, freqCount, tokens);
    }
    /**
     * Remove duplicated tokens
     * @param { Array } tokens - array of string token
     * @returns
     */
    wordDuplicateRemove(tokens){
        const R = this.R;
        return R.uniq(tokens);
    }
};
export default TokenTransformingMixins;