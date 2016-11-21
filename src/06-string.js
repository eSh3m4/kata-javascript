/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Objets_globaux/String
*/

var chai = require('chai');
var expect = chai.expect;

describe('about string', () => {

    it('1-it can be created literaly', () => {
        var value = _;

        expect(value).to.equal("hello world");
    });

    it('2-it can be created with String', () => {
        var value = String(_);

        expect(value).to.equal("hello world");
    });

    it('3-it can be concatenated', () => {
        var value = _ + _ + _;

        expect(value).to.equal("hello world");
    });

    it('4-it can be concatenated using method', () => {
        var value = "";
        value = value._(_, _, _);

        expect(value).to.equal("hello world");
    });

    it('5-it can be concatenated with number', () => {
        var value = "1" + 1;

        expect(value).to.equal(_);
    });

    it('6-is implicity converted', () => {
        var value = (("1"+"1") * 1 + 1)/"2";

        expect(value).to.equal(_);
    });
    
    it('7-is implicity converted bis', () => {
        var value = ("1"+"1" * 1 + 2)/"2";

        expect(value).to.equal(_);
    });

    it('8-is 0', () => {
        expect("" == 0).to.equal(_);
        expect(" " == 0).to.equal(_);
        expect(" " == "").to.equal(_);
    });

    it('9-can be partially replaced', () => {
        var value = "hello world";
        var newValue = value._;

        expect(newValue).to.equal("hell0 world");
    });

    it('10-can be totally replaced', () => {
        var value = "hello world";
        var newValue = value.replace(_);

        expect(newValue).to.equal("hell0 w0rld");
    });

    it('11-can be splitted', () => {
        var value = "hello world";
        var newValue = value._;

        expect(newValue).to.eql(["hell", " w", "rld"]);
    });

    it('12-can be instanciated on multiple lines', () => {
        /*
        the next syntax is forbidden:
            var value = "hello"+
            "world";
        */
        var value = _;

        expect(value).to.eql("hello world");
    });
});