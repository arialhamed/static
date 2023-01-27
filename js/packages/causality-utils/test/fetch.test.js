import {default as fetch} from '../src/fetch';
/** @test {Fetch} */
test('fetch file should be okay', async ()=>{
    const link = 'https://avatars3.githubusercontent.com/u/43268620?s=200&v=4';
    let data = await fetch.fetchData(link);
    /** @test {Fetch#instance} */
    expect(data).toBeDefined();
})
