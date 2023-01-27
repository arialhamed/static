import { default as Tensor } from '../src/tensor';
/** @test {Tensor} */
test('tensor init should be okay', ()=>{
    let T = new Tensor();
    expect(T.CoreTensor).toBeDefined();
})