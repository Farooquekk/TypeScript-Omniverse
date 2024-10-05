
class BottleMaker{
    constructor(public name: string, public price: number) {
        
    }
}

let bottle1 = new BottleMaker("Haier",2300);


class ToyMaker{
    price = 1000;
    constructor(public name: string, public type: string) {
        
    }
}
new ToyMaker("Thomas Train", "Baby Boy Related");

// **********************************************************

// this way is not best practice in tys define access modifiers in constructor tys gives you that option

class Book{
    public bookName;
    public writer;
    public copyright;
    public price;

    constructor(bookName: string,writer:string,copyright:boolean,price:number) {
        this.bookName = bookName;
        this.copyright = copyright;
        this.price = price;
        this.writer = writer;
    }
}

let book1 = new Book("c++", "Robert layfor", true, 3400);
book1.bookName = "Pata nahi Ji";
