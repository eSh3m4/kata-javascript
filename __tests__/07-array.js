/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Objets_globaux/Array
*/


describe('about array', () => {
    it('1-can be browsed', () => {
        expect(["a", "b", "c"][2]).toBe( _ );
    });

    it('2-can be converted to string', () => {
        expect(["a", "b"]+["c", "d"]).toBe( _ );
    });

    it("3-you can add an item", () => {
        var array = ["a", "b"];  
        
        array. _ ("c");
        
        expect(array).toEqual(["a", "b", "c"]);
    });

    it("4-you can concatenate two array", () => {
        var array1 = ["a", "b"];
        var array2 = ["c", "d"];
        
        var array = array1. _ ;
        
        expect(array).toEqual(["a", "b", "c", "d", "e"]);
    });

    it("5-you can remove an item", () => {
        var array = expectedArray = ["a", "b", "c"];  
        
        // complete here. You can't create a new array
        
        expect(array).toEqual(["a", "c"]);
        expect(array).toBe(expectedArray);
    });

    it("6-you can iterate on elements", () => {
        var array =  [1, 2, 3];  
        var sum = 0;

        array. _ ;
        
        expect(sum).toBe(6);
    });
    
    it("7-you can apply function on each element to create new array", () => {
        var array = [1, 2, 3];
        function multiply(e) { return e * 2 };
        
        var newArray = array. _ (multiply);
        
        expect(newArray).toEqual([2,4,6]);
    });
    
    it("8-you can sort elements", () => {
        var array = expectedArray = [10, 5, 1, 20, 15];
        
        array. _ ;

        expect(array).toEqual([1,5,10,15,20]);
        expect(array).toBe(expectedArray);
    });
});