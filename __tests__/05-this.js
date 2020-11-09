/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this
*/

// 'use strict'; ///Keep commented to access global scope
describe('about this', () => {
    it('1-is global', function () {
        a = 'A';
        var b = 'B';
        let c = 'C';
        function myFunction() {
            var a = 'X';
            var d = e = 'D';
            return this;
        }

        expect(myFunction()).toBe( _ );
        expect(globalThis.a).toBe( _ );
        expect(globalThis.b).toBe( _ );
        expect(globalThis.c).toBe( _ );
        expect(globalThis.d).toBe( _ );
        expect(globalThis.e).toBe( _ );
    });

    it('2-is in strict mode', () => {
        a = 'A';
        var b = 'B';
        let c = 'C';
        var myFunction = function() {
            "use strict"; ///Keep strict mode active
            var a = 'X';
            var d = 'D', e = d;
            return this;
        }

        expect(myFunction()).toBe( _ );
        expect(globalThis.a).toBe( _ );
        expect(globalThis.b).toBe( _ );
        expect(globalThis.c).toBe( _ );
        expect(globalThis.d).toBe( _ );
        expect(globalThis.e).toBe( _ );
    });

    it('3-function context', () => {
        this.value = "a";
        function myFunction() {
            this.value = "b";
        }

        myFunction();

        expect(this.value).toBe( _ );
    });

    it('4-object context', () => {
        function myClass() {
            this.value = "a";
        }

        let myObject = new myClass();

        expect(myObject.value).toBe( _ );
    });

    it('5-current context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
        }

        let myObject = new myClass();

        expect(myObject.value).toBe( _ );
        expect(this.value).toBe( _ );
    });

    it('6-function context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
            this.setValue = function () {
                this.value = "c";
            }
        }

        let myObject = new myClass();
        myObject.setValue();

        expect(myObject.value).toBe( _ );
        expect(this.value).toBe( _ );
    });

    it('7-timeout context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
            this.setValue = function () {
                this.value = "c";
            }
        }

        let myObject = new myClass();
        setTimeout(function () { myObject.setValue(); });

        expect(myObject.value).toBe( _ );
        expect(this.value).toBe( _ );
    });

    it('8-bind context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
            this.setValue = function () {
                this.value = "c";
            }
        }

        let myObject = new myClass();
        myObject.setValue.bind(this)();

        expect(myObject.value).toBe( _ );
        expect(this.value).toBe( _ );
    });

    it('9-invoke function with context', () => {
        this.value = "a";

        function myClass() {
            this.value = "b";
            this.setValue = function (value) {
                this.value = value;
            }
        }

        let myObject1 = new myClass();
        let myObject2 = new myClass();

        myObject2.setValue("c");
        myObject1.setValue.apply(this, ["d", "e"]);
        myObject2.setValue.call(myObject1, "f");

        expect(this.value).toBe( _ );
        expect(myObject1.value).toBe( _ );
        expect(myObject2.value).toBe( _ );
    });
});
