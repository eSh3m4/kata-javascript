/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Guide/Types_et_grammaire#Types_de_données
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof
*/


describe('about basic types', () => {
  it('1-you should know what type of booleans is', () => {
    expect(typeof true).toBe( _ );
  });

  it('2-you should know what type of strings is', () => {
    expect(typeof 'A').toBe( _ );
    expect(typeof "a string").toBe( _ );
    expect(typeof String("a string")).toBe( _ );
    expect(typeof new String("a string")).toBe( _ );
    expect(new String("a string")).toBeInstanceOf( _ );
  });

  it('3-you should know what type of numbers is', () => {
    expect(typeof 42).toBe( _ );
    expect(typeof Math.PI).toBe( _ );
  });

  it('4-you should know what type of undefined is', () => {
    expect(typeof undefined).toBe( _ );
  });

  it('5-you should know what type of functions is', () => {
    expect(typeof function () { }).toBe( _ );
    expect(typeof (() => { })).toBe( _ );
    expect(function () { }).toBeInstanceOf( _ );
    expect(() => { }).toBeInstanceOf( _ );
  });

  it('6-you should know what type of objects is', () => {
    expect({ foo: 'bar' }).toBeInstanceOf( _ );

    expect([1, 2, 3]).toBeInstanceOf( _ );
    expect(typeof [1, 2, 3]).toBe( _ );

    expect(/Regexp/).toBeInstanceOf( _ );
    expect(typeof /Regex/g).toBe( _ );

    expect(new Date()).toBeInstanceOf( _ );
    expect(typeof new Date()).toBe( _ );

    expect(Symbol('foo').toString()).toBe( _ );
    expect(typeof Symbol()).toBe( _ );
  });

  class Person {
    constructor() {
      this.firstName = 'John';
      this.lastName = 'Doe';
    }
  }

  it('7-you should know what type of classes is', () => {
    expect(new Person()).toBeInstanceOf( _ );
  });
});
