import { causalNetRunner, RunnerMixins } from '../src/index';
/** @test {CausalNetRunner} */
test('CausalNetRunner should be defined', ()=>{
    expect(causalNetRunner).toBeDefined();
});
/** @test {RunnerMixins} */
test('RunnerMixins should be defined', ()=>{
    expect(RunnerMixins).toBeDefined();
});
