import {default as assert} from '../src/assert';
/** @test {assert} */
test('assert should be define', async ()=>{
    /** @test {assert#instance} */
    expect(assert).toBeDefined();
})