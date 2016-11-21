/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/docs/Web/JavaScript/Closures
*/

var chai = require('chai');
var expect = chai.expect;

describe('about closures', () => {
    it('2- inner variable scope', () => {
        var a = "a";
        (function () {
            var a = "b";
        })();

        expect(a).to.equal(_);
    });

    it('3-outer variable scope', () => {
        var a = "a";
        (function () {
            a = "b";
        })();

        expect(a).to.equal(_);
    });

    it('4-closures are functions', () => {
        (function (arg) {
            arg.item = "item"
        })(this);

        expect(item).to.equal(_);
    });
});
