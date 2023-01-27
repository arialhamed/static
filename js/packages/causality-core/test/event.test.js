import { default as Event } from '../src/event';
/** @test {Event} */
test('event instance should be defined', ()=>{
    let event = new Event();
    expect(event).toBeDefined();
})