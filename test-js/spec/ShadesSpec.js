var collection = [{
    "name":  "2012 Fall",
    "brand": "Chanel",
    "colors": [
        {
            "name": "99",
            "url": "/shades/Chanel 2012 Fall 99.mp3"
        },
        {
            "name": "109",
            "url": "/shades/Chanel 2012 Fall 109.mp3"
        }]
}, {
    "name": "2011 Winter",
    "brand": "MAC",
    "colors": [
        {
            "name": "Red Ruby",
            "url": "/shades/MAC 2011 Winter Red Ruby.mp3"
        },
        {
            "name": "Viva Glam",
            "url": "/shades/MAC 2011 Winter Viva Glam.mp3"
    }]
}];

describe("Collection", function(){
    
    beforeEach(function() {
        this.collection = new Collection (collection[0]);
    });

    it("creates from data given", function() {
        expect(this.collection.get('colors').length).toEqual(2);
    });

    describe("first color", function() {

        it("identifies correct first color", function() {
            expect(this.collection.isFirstColor(0)).toBeTruthy();
        });
    });

    describe("last color", function() {

        it("identifies correct last color", function() {
            expect(this.collection.isLastColor(1)).toBeTruthy();
        });
    });

    it("returns the url of a color", function() {
        expect(this.collection.colorUrlAtIndex(0)).toEqual("/shades/Chanel 2012 Fall 99.mp3");
    })
})