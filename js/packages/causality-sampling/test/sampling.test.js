import { default as causalNetSampling } from '../src/causalNetSampling';
/** @test {CausalNetSampling} */
test('negSampling should be okay', async ()=>{
    let samples = causalNetSampling.negSampling(4, [0, 1], [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]);
    expect(samples.length).toEqual(4);
})
/** @test {CausalNetSampling} */
test('subSampling should be okay', async ()=>{
    let samples = causalNetSampling.subSampling(4, 10);
    expect(samples.length).toEqual(4);
})