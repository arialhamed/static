import stream from 'readable-stream';
/**
 * This Stream class provide wrapper functions for 
 * [readable-stream](https://www.npmjs.com/package/readable-stream)
 * @class StreamUtils
 * @example
 * [EXAMPLE ../examples/stream.babel.js]
 */
class Stream{
    constructor(stream){
    
        /** @private { readable-stream } */
        this.stream = stream;
    }
    
    /**
     * create reable object from readFn.
     * @param { Function } readFn - called function for new data
     * @returns { Readable } 
     */
    makeReadable(readFn=null){
        let reader = new stream.Readable({objectMode: true});
        const DefaultReader = ()=>{};
        reader._read = readFn || DefaultReader;
        return reader;
    }
    
    /**
     * create writeable object from writeFn.
     * @param { Function } writeFn - called function for new data
     * @returns { Writable }
     */
    makeWritable(writeFn){
        let writer = new stream.Writable({objectMode: true});
        writer._write = writeFn;
        return writer;
    }
    
    /**
     * create duplex object from writeFn and optional readFn.
     * @param { Function } writeFn - called function for new data
     * @param { Function } [readFn=null] 
     * @returns { Duplex } 
     */
    makeDuplex(writeFn, readFn=null){
        let duplex = new stream.Duplex({objectMode: true});
        duplex._write = writeFn;
        const DefaultReader = ()=>{};
        duplex._read = readFn || DefaultReader;
        return duplex;
    }

    /**
     * create transform object from transformFn
     * @param { Function } transformFn - called function for new data
     * @returns { Transform }
     */
    makeTransform(transformFn){
        let transformer = new stream.Transform({objectMode: true});
        transformer._transform = transformFn;
        return transformer;
    }
    
    /**
     * create pipeline from array of [readable, ...tranforms, writable].
     * This stream.makePipeline([readable, transform, writable]) 
     * equivalent to readable.pipe(transform).pipe(writable).
     * @param { Array } streams - array of [readable, ...tranforms, writable]
     * @param { Function } [onDataFn=null] - handle function for data event at readable 
     * @returns { Promise } promise - resolve "Success" after finish or "Pipeline failed. ${err}".
     */
    makePipeline(streams, onDataFn=null){
        return new Promise((resolve, reject)=>{
            let writer = streams.slice(-1)[0];
            let reader = streams[0];
            writer.on('finish',()=>{
                resolve('Success');
            });
            writer.on('error',(err)=>{
                reject(`Pipeline failed. ${err}`);
            });
            reader.on('data',(data)=>{
                if(onDataFn){ onDataFn(data); }
            });
            return streams.reduce((p, s)=>p.pipe(s));
        });
    }
};

const streamUtils = new Stream(stream);
export default streamUtils;