/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/docs/Web/JavaScript/Guide/Types_et_grammaire#Types_de_données
  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof
*/

var chai = require('chai');
var expect = chai.expect;

describe('about basic types', () => {
  it('1-you should know what type of booleans is', () => {
    expect(true).to.be.a( _ );
  });

  it('2-you should know what type of strings is', () => {
    expect('A').to.be.a( _ );
    expect("a string").to.be.a( _ );
    expect(String("a string")).to.be.a( _ );
    expect(new String("a string")).to.be.a( _ );
  });

  it('3-you should know what type of numbers is', () => {
    expect(42).to.be.a( _ );
    expect(Math.PI).to.be.a( _ );
  });

  it('4-you should know what type of undefined is', () => {
    expect(undefined).to.be.an( _ );
  });

  it('5-you should know what type of functions is', () => {
    expect(function () { }).to.be.a( _ );
    expect(() => { }).to.be.a( _ );
  });

  it('6-you should know what type of objects is', () => {
    expect({ foo: 'bar' }).to.be.an( "Object" );

    expect([1, 2, 3]).to.be.an( "Array" );
    expect(typeof [1, 2, 3]).to.equal( "object" );

    expect(/Regexp/).to.be.a( _ );
    expect(typeof /Regex/g).to.equal( _ );

    expect(new Date()).to.be.a( _ );
    expect(typeof new Date()).to.equal( _ );

    expect(Symbol()).to.be.a( _ );
    expect(typeof Symbol()).to.equal( _ );
  });

  class Person {
    constructor() {
      this.firstName = 'John';
      this.lastName = 'Doe';
    }
  }

  it('7-you should know what type of classes is', () => {
    expect(new Person()).to.be.an( _ );
  });
});
