import {default as pngUtils } from '../src/pngUtils';
/** @test {PNGUtils} */
test('create PNG file must success', async ()=>{
    let PNG = pngUtils.CorePNG;
    let png = new PNG({width:1, height:1});
    png.data = Buffer.from([128,128,128,255]);
    /** @test {pngUtils#createFile} */
    expect(png).toBeDefined();
});