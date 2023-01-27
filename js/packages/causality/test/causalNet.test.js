import { causalNet } from '../src/index';
/** @test {CausalNet} */
test('CausalNet should be define', async ()=>{
    /** @test {CausalNet#instance} */
    expect(causalNet).toBeDefined();
})