import {indexDBStorage} from '../src/index';
const timeout = 10000;//10 s to avoid
beforeEach(()=>{}, timeout);
/** @test {IndexDBStorage} */
test('indexdb write file should be okay', async ()=>{
    let writePath = await indexDBStorage.writeFile('temp','12345');
    expect(writePath).toBeDefined();
})
/** @test {IndexDBStorage} */
test('indexdb read file should be okay', async ()=>{
    let item = await indexDBStorage.writeFile('temp','12345');
    let data = await indexDBStorage.readFile('temp');    
    expect(data).toBe('12345');
})
/** @test {IndexDBStorage} */
test('indexdb delete file should be okay', async ()=>{
    let writePath = await indexDBStorage.writeFile('temp','12345');
    let filePath = await indexDBStorage.deleteFile(writePath);    
    return await indexDBStorage.readFile('temp').catch(e=>{
        expect(e).toMatch(/read/);
    })
})
/** @test {IndexDBStorage} */
test('indexdb batch write should be okay', async ()=>{
    let ops = [//no op get
            { type: 'put', key: 'temp', value: '123445' },
            { type: 'del', key: 'temp' }];
    let res = await indexDBStorage.batch(ops);
    console.log({res});
    expect(res).toBeDefined();
})
/** @test {IndexDBStorage} */
test('indexdb list file should be okay', async ()=>{
    let fileList = await indexDBStorage.getFileList('/list/');
    console.log({fileList});
    expect(fileList).toBeDefined();
})
/** @test {IndexDBStorage} */
test('indexdb delete by prefix should be okay', async ()=>{
    let writePath = await indexDBStorage.deleteFileByPrefix('/list/');
    console.log({writePath});
    expect(writePath).toBeDefined();
})