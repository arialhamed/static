import { causalNetModels } from '../src/index';
/** @test {CausalNetModels} */
test('causalNetModels instance should be defined', ()=>{
    expect(causalNetModels).toBeDefined();
})
/** @test {CausalNetModels} */
test('classification shoudld be returned', ()=>{
    expect(causalNetModels.classification(2)).toBeDefined();
})