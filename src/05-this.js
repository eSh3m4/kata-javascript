var chai = require('chai');
var expect = chai.expect;

describe('about this', () => {
    it('1-is global', () => {
        function myFunction() {
            return this;
        }

        expect(myFunction().to.equal(_));
    });

    it('2-is in strict mode', () => {
        function myFunction() {
            "use strict";
            return this;
        }

        expect(myFunction().to.equal(_));
    });

    it('3-function context', () => {
        this.value = "a";
        function myFunction() {
            this.value = "b";
        }
        
        myFunction();

        expect(this.value.to.equal(_));
    });

    it('4-object context', () => {
        function myClass() {
            this.value = "a";
        }

        var myObject = new myClass();
        expect(myObject.value.to.equal(_));
    });

    it('5-current context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
        }

        var myObject = new myClass();

        expect(myObject.value.to.equal(_));
        expect(this.value.to.equal(_));
    });

    it('6-function context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
            this.setValue = function () {
                this.value = "c";
            }
        }

        var myObject = new myClass();
        myObject.setValue();

        expect(myObject.value.to.equal(_));
        expect(this.value.to.equal(_));
    });

    it('7-timeout context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
            this.setValue = function () {
                this.value = "c";
            }
        }

        var myObject = new myClass();
        setTimeout(myObject.setValue);

        expect(myObject.value.to.equal(_));
        expect(this.value.to.equal(_));
    });

    it('8-timeout context bis', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
            this.setValue = function () {
                this.value = "c";
            }
        }

        var myObject = new myClass();
        setTimeout(function () { myObject.setValue(); });

        expect(myObject.value.to.equal(_));
        expect(this.value.to.equal(_));
    });

    it('9-bind context', () => {
        this.value = "a";
        function myClass() {
            this.value = "b";
            this.setValue = function () {
                this.value = "c";
            }
        }

        var myObject = new myClass();
        myObject.setValue().bind(this);

        expect(myObject.value.to.equal(_));
        expect(this.value.to.equal(_));
    });

    it('10-invoke function with context', () => {
        this.value = "a";

        function myClass() {
            this.value = "b";
            this.setValue = function (value) {
                this.value = value;
            }
        }

        var myObject1 = new myClass();
        var myObject2 = new myClass();

        myObject2.setValue("c");
        myObject1.setValue.apply(this, ["d", "e"]);
        myObject2.setValue.call(myObject1, "f");

        expect(this.value.to.equal(_));
        expect(myObject1.value.to.equal(_));
        expect(myObject2.value.to.equal(_));
    });
});
