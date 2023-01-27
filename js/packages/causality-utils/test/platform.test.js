import {default as platform} from '../src/platform';
/** @test {Platform} */
test('platform must return', ()=>{
    let machine = platform.currentPlatform();
    /** @test {Platform#instance} */
    expect(machine).toBeDefined();
});
/** @test {Platform} */
test('platform mix should works', ()=>{
    class A{
        constructor(){
        }
        sayA(){
            return 'say A';
        }
    }
    const AMixins = (Base)=>class extends Base{
        sayAExtend(){
            return 'say A with mixins';
        }
    }
    class AExtends extends platform.mixWith(A, [AMixins]){}
    const a = new AExtends();
    /** @test {Platform#mixWith} */
    expect(a.sayAExtend()).toEqual('say A with mixins');
});