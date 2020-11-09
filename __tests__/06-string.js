/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Objets_globaux/String
*/

'use strict';
describe('about string', () => {

    it('1-it can be created literaly', () => {
        let value = _ ;

        expect(value).toBe("hello world");
    });

    it('2-it can be created with String', () => {
        let value = String( _ );

        expect(value).toBe("hello world");
    });

    it('3-it can be concatenated', () => {
        let value = _ + _ + _ ;

        expect(value).toBe("hello world");
    });

    it('4-it can be concatenated using method', () => {
        let value = "";
        value = value. _ ( _ , _ , _ );

        expect(value).toBe("hello world");
    });

    it('5-it can be concatenated with number', () => {
        let value = "1" + 1;

        expect(value).toBe( _ );
    });

    it('6-is implicity converted', () => {
        let value = (("1"+"1") * 1 + 1)/"2";

        expect(value).toBe( _ );
    });
    
    it('7-is implicity converted bis', () => {
        let value = ("1"+"1" * 1 + 2)/"2";

        expect(value).toBe( _ );
    });

    it('8-is 0', () => {
        expect("" == 0).toBe( _ );
        expect(" " == 0).toBe( _ );
        expect(" " == "").toBe( _ );
    });

    it('9-can be partially replaced', () => {
        let value = "hello world";
        let newValue = value. _ ;

        expect(newValue).toBe("hell0 world");
    });

    it('10-can be totally replaced', () => {
        let value = "hello world";
        let newValue = value.replace( _ );

        expect(newValue).toBe("hell0 w0rld");
    });

    it('11-can be splitted', () => {
        let value = "hello world";
        let newValue = value. _ ;

        expect(newValue).toEqual(["hell", " w", "rld"]);
    });

    it('12-can be instanciated on multiple lines', () => {
        /*
        the next syntax is forbidden:
            let value = "hello"+
            "world";
        */
        let value = _ ;

        expect(value).toEqual("hello world");
    });
});