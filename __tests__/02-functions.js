/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Une_r%C3%A9introduction_%C3%A0_JavaScript#Les_fonctions
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Guide/Fonctions
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Objets_globaux/Function/call
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Objets_globaux/Function/apply
*/

'use strict';
describe('about functions', () => {
  it('1-return a value', () => {
    function helloWorld() {
      /// complete here
    }
    expect(helloWorld()).toBe("hello world");
  });

  it('2-can have argument', () => {
    function helloWorld(arg) {
      return arg;
    }
    expect(helloWorld( _ )).toBe("hello world");
  });

  it('3-can have arguments', () => {
    function helloWorld(arg1, arg2) {
      return `${arg1} ${arg2}`;
    }
    expect(helloWorld( _ , _ )).toBe("hello world");
  });

  it('4-can be called with less arguments than expected', () => {
    function helloWorld(arg1, arg2) {
      return arg2;
    }
    expect(helloWorld("hello")).toBe( _ );
  });

  it('5-can be called with more arguments than expected', () => {
    function helloWorld(arg1, arg2) {
      return `${arg1} ${arg2}`;
    }
    expect(helloWorld("hello", "world", "bis")).toBe( _ );
  });

  it('6-can use arguments object', () => {
    function helloWorld(dontUseThisArg) {
      /// complete here
    }
    expect(helloWorld("hello", "world")).toBe("hello world");
  });

  it('7-can be created using Function', () => {
    let myFunction = new Function( _ , _ );

    expect(myFunction("hello world")).toBe("hello world");
  });

  it('8-can be self-created', () => {
    let a = "";
    /// modify this function to be self-called
    function helloWorld(dontUseThisArg) {
      a = "a";
    }

    expect(a).toBe("a");
  });

  it('9-can be invoked with call', () => {
    function helloWorld(arg) {
      return arg;
    }

    let result = helloWorld.call( _ , _)

    expect(result).toBe("a");
  });

  it('10-can be invoked with apply', () => {
    function helloWorld(arg1, arg2) {
      return arg1 + arg2;
    }

    let result = helloWorld.apply( _ , _ )

    expect(result).toBe("hello world");
  });
});
