const NegativeSamplingMixins = (BaseSamplingClass)=> class extends BaseSamplingClass{
    /**
     * Perform negative sampling given the select prob of ids and list of positive samples
     * @param { Number } negativeSize - size to sample
     * @param { Array } positiveSamples - Array of possitive Ids
     * @param { Array } candidateProbs - Array of probablity of candidate Ids
     * @param { Boolean } [replacable=true] - if true, no duplicated sampling Id returned
     * @returns { Array } array of sampled Ids
     */
    negSampling(negativeSize, positiveSamples, candidateProbs, replacable=true){
        const R = this.R, Random = this.Random;
        if(R.any((v)=> !R.type(Number,v) || v > 1 || v < 0, candidateProbs)){
            throw Error(`${JSON.stringify(candidateProbs)} is not allow`);
        }
        let seletionProbs = R.reduce((selectionProbs, pidx)=>{
                                selectionProbs[pidx] = Infinity;//positive candidate never be choosed
                                return selectionProbs;
                            }, R.clone(candidateProbs), positiveSamples);
        let samples = [], takenIdxs = R.clone(seletionProbs);
        const GenNewCandidateIdx = ()=>Random.int(0, seletionProbs.length-1);
        const SelectIfHighProb = (prob)=>{
            let rand = Random.float();
            return rand>prob;
        };
        while(samples.length < negativeSize){
            let idx = GenNewCandidateIdx();
            let selected = SelectIfHighProb(seletionProbs[idx]);
            if(!selected){
                continue;
            }
            if(!replacable && takenIdxs[idx]===null){
                continue;
            }
            samples = [...samples, idx];
            if(!replacable){
                takenIdxs[idx]=null;//non replaceable
            }
        }    
        return samples;
    }
};
export default NegativeSamplingMixins;