const ParameterFunctorMixins = (FunctorClass)=> class extends FunctorClass{ 
    isParameter(val){
        const R = this.R;
        return R.ifElse(R.is(Array), R.all(R.is(Number)), R.always(false))(val);
    }
    parameterMapWithKey(fn, parameterObject){
        const R = this.R;
        
        const Res = (keys, subObject) => R.compose(R.fromPairs, 
                        R.map(([key, subObject])=>{
                            if(this.isParameter(subObject)){
                                return [key, fn([...keys, key], subObject)];
                            }
                            else{
                                if(R.is(Object, subObject)){
                                    return [key, Res([...keys, key], subObject)];
                                }
                                else{
                                    return [key, subObject];
                                }
                            }
                        }), R.toPairs)(subObject);
        return Res([], parameterObject);
    }        
};

export default ParameterFunctorMixins;