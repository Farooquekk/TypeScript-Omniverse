"use strict";
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let bottle1 = new BottleMaker("Haier", 2300);
class ToyMaker {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.price = 1000;
    }
}
new ToyMaker("Thomas Train", "Baby Boy Related");
// **********************************************************
// this way is not best practice in tys define access modifiers in constructor tys gives you that option
class Book {
    constructor(bookName, writer, copyright, price) {
        this.bookName = bookName;
        this.copyright = copyright;
        this.price = price;
        this.writer = writer;
    }
}
let book1 = new Book("c++", "Robert layfor", true, 3400);
book1.bookName = "Pata nahi Ji";
