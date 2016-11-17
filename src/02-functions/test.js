var chai = require('chai');
var expect = chai.expect;

describe('about functions', () => {
  it('1- return a value', () => {
    function helloWorld()
    {
    }
    expect(helloWorld()).to.equal( "hello world" );
  });


});
