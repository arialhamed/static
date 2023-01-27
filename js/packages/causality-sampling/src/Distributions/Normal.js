import {default as Distribution} from "./Distribution";

export default class Normal extends Distribution{
    init({...kwargs}){
        let { mu } = kwargs;
        this.mu = mu;
        this.std = std;
    }
    logP(x){
        
    }
    sampling(shape){
        const size = this.getSize(shape);
        let samples = this.random.binomial(size, this.p);
        return this.T.tensor(samples).reshape(shape);
    }
}