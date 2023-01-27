const SubSamplingMixins = (BaseSamplingClass) => class extends BaseSamplingClass{
    /**
     * Perform uniform sample a sub set of Ids given the candidate list
     * @param { Number } samplingSize
     * @param { Array|Number } candidateList - list of candidates or size of candidate list
     * @param { Boolean } [replacable=true] - if true, no duplicated sampling Id returned
     * @returns { Array } array of sampled Ids
     */
    subSampling(samplingSize, candidateList, replacable=true){
        const R = this.R, Random = this.Random;
        let candidates = Array.isArray(candidateList)?R.clone(candidateList):R.range(0, candidateList);
        if(candidates.length === 0){
            throw Error('candidate length should be positive');
        }
        let samples = [], takenIdxs = R.clone(candidates);
        const GenNewCandidateIdx = ()=>Random.int(0, candidates.length-1);
        while(samples.length < samplingSize){
            let idx = GenNewCandidateIdx();
            if(!replacable && takenIdxs[idx]===null){
                continue;
            }
            samples = [...samples, candidates[idx]];
            if(!replacable){
                takenIdxs[idx]=null;//non replaceable
            }
        }    
        return samples;
    }
};
export default SubSamplingMixins;