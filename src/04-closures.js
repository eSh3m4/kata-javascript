var chai = require('chai');
var expect = chai.expect;

describe('about closures', () => {
    it('1-inner variable scope', () => {
        (function () {
            var a = "a";
        })();
        expect(a.to.equal(_));
    });

    it('2-outer variable scope', () => {
        var a = "a";
        (function () {
            var a = "b";
        })();
        expect(a.to.equal(_));
    });

    it('3-outer variable scope bis', () => {
        var a = "a";
        (function () {
            a = "b";
        })();
        expect(a.to.equal(_));
    });
});
