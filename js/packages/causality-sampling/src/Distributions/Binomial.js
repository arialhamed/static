import {default as Distribution} from "./Distribution";
export default class Binomial extends Distribution{
    constructor({...kwargs}){
        super();
        let { n, p } = kwargs;
        this.n = n;
        this.p = p;
    }
    /**
     * k: sampling value
     * $\log{P(k; n, p)} \propto k \log{p} + (n-k)\log{(1-p)}$
     * @param {*} x
     * @memberof Binomial
     */
    logP(k){
        const n = this.n, p = this.p;
        const one = this.T.tensor(1);
        return this.T.sum( k.mul(p.log()).add( n.sub(k).mul(one.sub(p).log()) ) );
    }
    sampling(shape){
        const n = this.n.dataSync()[0];
        const p = this.p.dataSync()[0];
        const size = this.getSize(shape);
        const Generator = ()=>{
            let sample = 0;
            for(let counter = 0; counter++ < n; counter++){
                sample += (Math.random() < p);
            }
            return sample;
        };
        let samples = [];
        for(let counter=0;counter<size; counter++){
            samples.push(Generator());
        }
        return this.T.tensor(samples).reshape(shape);
    }
}