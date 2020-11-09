/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Closures
*/

'use strict';
describe('about closures', () => {
    it('1-inner variable scope', () => {
        let a = "a";
        (function () {
            let a = "b";
        })();

        expect(a).toBe( _ );
    });

    it('2-outer variable scope', () => {
        let a = "a";
        (function () {
            a = "b";
        })();

        expect(a).toBe( _ );
    });

    it('3-closures are functions', () => {
        (function (arg) {
            arg.item = "item"
        })(this);

        expect(this.item).toBe( _ );
    });

    it('4-works with loops', (done) => {
        let results = [];

        function addResult(value) {
            results.push(value);
        }
        for (var i = 0; i < 3; i++) {///Do not remove the "var"
            setTimeout(function () {
                addResult(i);
            });
        }

        setTimeout(function () {
            expect(results).toEqual( _ );
            done();
        }, 10)
    });

    it('5-works with loops bis', (done) => {
        let results = [];

        function addResult(value) {
            return _ ;
        }

        for (var i = 0; i < 3; i++) {///Do not remove the "var"
            setTimeout(addResult(i));
        }

        setTimeout(function () {
            expect(results).toEqual([0, 1, 2]);
            done();
        }, 10)
    });
});
