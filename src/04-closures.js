/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/docs/Web/JavaScript/Closures
*/

var chai = require('chai');
var expect = chai.expect;

describe('about closures', () => {
    it('1-inner variable scope', () => {
        var a = "a";
        (function () {
            var a = "b";
        })();

        expect(a).to.equal(_);
    });

    it('2-outer variable scope', () => {
        var a = "a";
        (function () {
            a = "b";
        })();

        expect(a).to.equal(_);
    });

    it('3-closures are functions', () => {
        (function (arg) {
            arg.item = "item"
        })(this);

        expect(item).to.equal(_);
    });

    it('4-works with loops', function (done) {
        var results = [];

        function addResult(value) {
            results.push(value);
        }
        for (var i = 0; i < 3; i++) {
            setTimeout(function () {
                addResult(i);
            });
        }

        setTimeout(function () {
            expect(results).to.eql(_);
            done();
        }, 10)
    });

    it('4-works with loops bis', function (done) {
        var results = [];

        function addResult(value) {
            //complete the function
          
        }

        for (var i = 0; i < 3; i++) {
            setTimeout(addResult(i));
        }

        setTimeout(function () {
            expect(results).to.eql([0,1,2]);
            done();
        }, 10)
    });
});
