import { default as Functor } from '../src/functor';
/** @test {Functor} */
test('functor setIn should be okay', ()=>{
    let F = new Functor();
    let setVal = F.setIn(['a','b','c'],'3',{a:1});
    expect(setVal).toEqual({"a":{"b":{"c":"3"}}});
})