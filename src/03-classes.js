var chai = require('chai');
var expect = chai.expect;

describe('about classes', () => {
  it('1-can create an object', () => {
    function myClass() {
      /// complete here
    }
    expect(new myClass().a).to.equal("a");
  });
  
  it('2-can contain function', () => {
    function myClass() {
      var a = "a";
      /// complete here
    }
    expect(new myClass().getA()).to.equal("a");
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

    myClass.prototype = _;
    
    expect(new myClass().getA()).to.equal("a");
  });
});
