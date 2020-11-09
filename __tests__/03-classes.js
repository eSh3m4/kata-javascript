/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Classes
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_new
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes
*/

'use strict';
describe('about classes', () => {
  describe('about classes as functions', () => {
    it('1-can create an object', () => {
      function myClass() {
        /// complete here
      }
      expect(new myClass().a).toBe("a");
    });

    it('2-can contain function', () => {
      function myClass() {
        let a = "a";
        /// complete here
      }
      expect(new myClass().getA()).toBe("a");
    });

    it('3-can be inherited', () => {
      function parentClass() {
        this.getA = function () {
          return this.a;
        }
      }

      function myClass() {
        this.a = "a";
      }

      myClass.prototype = _ ;

      expect(new myClass().getA()).toBe("a");
    });
  });

  describe('about modern classes', () => {
    it('4-can create an object', () => {
      class myClass {
        constructor() {
          /// complete here
        }
      }
      expect(new myClass().a).toBe("a");
    });

    it('5-can contain getters', () => {
      class myClass {
        constructor() {}
        /// complete here
      }
      expect(new myClass().a).toBe("a");
    });

    it('6-can contain static methods', () => {
      class myClass {
        constructor() {}
        /// complete here
      }
      expect(myClass.getA()).toBe("a");
      expect(new myClass().getA).toBe( _ );
    });

    it('7-can be inherited', () => {
      class parentClass {
        constructor() {
          this.a = 'a';
        }
      }

      class myClass extends _ {
        constructor() {
          _ ;
        }
      }

      expect(new myClass().a).toBe("a");
    });
  });
});