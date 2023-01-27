import {default as csvUtils } from '../src/csvUtils';
/** @test {CSVUtils} */
test('create PNG file must success', async ()=>{
    let csv = csvUtils.CoreCSV;
    /** @test {CSVUtils#instance} */
    expect(csv).toBeDefined();
});