import { csvUtils } from 'causal-net.utils';
const CSVReaderMixins = ( BaseDataSource ) => class extends BaseDataSource {
    extractingAttribute(rows, sampleAttributes=[], labelAttributes=[]){
        let samples = [], labels = [];
        let i = 0;
        for(let row of rows){
            if(sampleAttributes.length){
                samples.push(sampleAttributes.map(k=>row[k]));
            }
            if(labelAttributes.length){
                labels.push(labelAttributes.map(k=>row[k]));
            }
        }
        if(samples.length>0 && labels.length>0){
            return {samples, labels};
        }
        else if(samples.length>0){
            return samples;
        }
        else if(labels.length>0){
            return labels;
        }
        else{
            throw Error(`${JSON.stringify(rows)} do not match ${sampleAttributes} and ${labelAttributes}`);
        }
    }
    makeCSVReader(baseLink, sampleAttributes=[], labelAttributes=[]){
        if( baseLink.startsWith('http') ){
            return async (fileName) => {
                let rows = await csvUtils.fetchCSV(baseLink + fileName);
                return this.extractingAttribute(rows, sampleAttributes, labelAttributes);
            };
        }
        else{
            return async (fileName) => { 
                let rows = await csvUtils.readCSV(baseLink + fileName);
                return this.extractingAttribute(rows, sampleAttributes, labelAttributes);
            };
        }
    }
};

export default CSVReaderMixins;