"use strict";
// Basic Types
//.Primitive Type (number,string,boolean).
//.Arrays
//.Tuples
//.Enums
//.Any, Unknown, Void, Null, Undefined, Never
// Primitive and Reference
// number
let f = 12;
// f="farooque" // this will show you error b/c in tys we have type safety number can't to change into string
// boolean
let condition = false;
// string
let char1 = 'b';
let str = "String";
// console.log(f);
// console.log(condition);
// console.log(char1);
// console.log(str);
//******************************************************************************
// Arrays
// blank array
let arr = [];
// number array
let num = [1, 2, 10, 10.1, 10.1];
// string or number array
let numStr = [40, "Farooque Sajjad"];
// number or object(value of obj is string now (you can use any)) array
let numObj = [40, { name: "Farooque Sajjad" }];
// number or object(value of obj is string) or object (value of obj is number) array
let numObj2 = [40, { name: "Farooque Sajjad" }, { name: 1234 }];
//******************************************************************************
// Tuples
//Fixed-length array with specific types.
let tuple = ["Farooque", 40];
let tuple2 = [false, "40"];
//******************************************************************************
// enum --> Enumeration
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "Farooque Sajjad";
    UserRoles["user"] = "xyz";
    UserRoles["owner"] = "Muhammad Sajjad";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.owner);
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = "abandoned status code is 500";
    StatusCode["NOTFOUND"] = "not found status code is 404";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.ABANDONED);
console.log(StatusCode.NOTFOUND);
// **********************************************************************
// How to define type?
let x = 100;
// Any 
//Allows any type, bypasses checking.
let y;
y = 17;
y = "abc";
y.concat(); // technically wrong
// Unknown
// Safer alternative to `any` type.
let z;
z = 28;
z = "Agha";
// z.concat() this will show you error b/c z is of unknown type
if (z === "string")
    z.toUpperCase(); // first need to check the type
// void
// Indicates no return value type.
function first() {
    console.log("I am First....");
}
//*****************************************************************************
// Null
// Represents an intentional empty value.
let n;
// n = "f"; // this will show you error b/c n is of null type
let m;
// now m will be either null or of type string
// imp --> getting the data from database
// ************************************************************************************
// Undefined
// Represents a variable without value.
let d;
// **********************************************************************************
// Never
// The `never` type represents values that never occur, typically used for functions that never return or always throw errors.
function never() {
    while (true) {
    }
}
never();
console.log("Hello Ji"); // Unreachable code detected.
