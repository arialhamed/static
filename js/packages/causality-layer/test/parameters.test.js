import { causalNetParameters, ParameterMixins, ParameterFunctorMixins } from '../src/index';
/** @test {CausalNetParameters} */
test('CausalNetParameters should be defined', ()=>{
    expect(causalNetParameters).toBeDefined();
});
/** @test {ParameterMixins} */
test('ParameterMixins should be defined', ()=>{
    expect(ParameterMixins).toBeDefined();
});
/** @test {ParameterFunctorMixins} */
test('ParameterFunctorMixins should be defined', ()=>{
    expect(ParameterFunctorMixins).toBeDefined();
});