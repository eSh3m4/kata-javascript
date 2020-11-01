/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Objets_globaux/String
*/


describe('about string', () => {

    it('1-it can be created literaly', () => {
        var value = _ ;

        expect(value).toBe("hello world");
    });

    it('2-it can be created with String', () => {
        var value = String( _ );

        expect(value).toBe("hello world");
    });

    it('3-it can be concatenated', () => {
        var value = _ + _ + _ ;

        expect(value).toBe("hello world");
    });

    it('4-it can be concatenated using method', () => {
        var value = "";
        value = value. _ ( _ , _ , _ );

        expect(value).toBe("hello world");
    });

    it('5-it can be concatenated with number', () => {
        var value = "1" + 1;

        expect(value).toBe( _ );
    });

    it('6-is implicity converted', () => {
        var value = (("1"+"1") * 1 + 1)/"2";

        expect(value).toBe( _ );
    });
    
    it('7-is implicity converted bis', () => {
        var value = ("1"+"1" * 1 + 2)/"2";

        expect(value).toBe( _ );
    });

    it('8-is 0', () => {
        expect("" == 0).toBe( _ );
        expect(" " == 0).toBe( _ );
        expect(" " == "").toBe( _ );
    });

    it('9-can be partially replaced', () => {
        var value = "hello world";
        var newValue = value. _ ;

        expect(newValue).toBe("hell0 world");
    });

    it('10-can be totally replaced', () => {
        var value = "hello world";
        var newValue = value.replace( _ );

        expect(newValue).toBe("hell0 w0rld");
    });

    it('11-can be splitted', () => {
        var value = "hello world";
        var newValue = value. _ ;

        expect(newValue).toEqual(["hell", " w", "rld"]);
    });

    it('12-can be instanciated on multiple lines', () => {
        /*
        the next syntax is forbidden:
            var value = "hello"+
            "world";
        */
        var value = _ ;

        expect(value).toEqual("hello world");
    });
});