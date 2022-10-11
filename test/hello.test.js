import { assert } from "chai";
import hello from "./hello.js";

it('Should print hello', ()=>{

    const helloResponse = hello();

    assert.equal(helloResponse, 'hello');
});
