/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Classes
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_new
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes
*/


describe('about classes', () => {
  it('1-can create an object', () => {
    function myClass() {
      /// complete here
    }
    expect(new myClass().a).toBe("a");
  });
  
  it('2-can contain function', () => {
    function myClass() {
      var a = "a";
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
