"use strict";
// Generics
// Generic Functions
// Generic Interfaces
// Generic class
// Generic Functions: Functions that allow parameters and return types to be specified generically, making them reusable for various data types while maintaining type safety. They are defined using a type placeholder, typically with the syntax <T>.
// Generic Interfaces: Interfaces that define contracts with generic type parameters, enabling different data types to be passed in while ensuring consistent structure and behavior across types.
// Generic Classes: Classes that use generics to define members, methods, and constructors with flexible types, allowing the same class to work with different data types without compromising type safety.
// function logger(a: any) {
//     console.log(a);   // don't use any it bounds you
// }
// logger("K");
// logger(true);
function general(vi) {
    console.log(vi);
}
general("Farooque");
general(true);
general(40);
function cc(food, price, coldDrinks) {
    console.log(coldDrinks, food, price);
}
cc("Biryani", 280, "Sting");
cc("Burger", 270);
function log(li) {
    console.log(li);
}
function bcd(obj) {
}
bcd({ name: "farooque", age: 30, key: "13ydvfuew3" });
// *******************************************************************************************
// Generic Classes
class CopyMaker {
    constructor(key) {
        this.key = key;
    }
}
let c1 = new CopyMaker("Small"); // TypeScript can infer(figure out) the type automatically based on the constructor argument you provide.
let c2 = new CopyMaker("medium");
let c3 = new CopyMaker(500);
let c4 = new CopyMaker(500);
// **********************************************************************************
// IMP --> concept
// "Hello" --> is not a string it's a string literal
// string: Can hold any string.
// string literals: Can only hold specific strings you define
function concept(a, b) {
    //return a;// works fine
    //return b; // works fine
    // return "hi"; // showing error --> b/c it's not a type F
    // return "hi" as F; // now it will work  fine
    // return <F>"hi"; // this will also works fine;
    return b; // intelliscence will not works here until you manually specify the type like typeof a === "string";
}
concept("h", "i");
