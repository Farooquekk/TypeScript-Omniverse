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
let arr = []

// number array
let num = [1, 2, 10, 10.1, 10.1];

// string or number array
let numStr = [40, "Farooque Sajjad"];

// number or object(value of obj is string now (you can use any)) array
let numObj = [40, { name: "Farooque Sajjad" }];

// number or object(value of obj is string) or object (value of obj is number) array
let numObj2 = [40, { name: "Farooque Sajjad" }, {name:1234}];


//******************************************************************************

// Tuples

//Fixed-length array with specific types.
let tuple: [string, number] = ["Farooque", 40];
let tuple2: [boolean, string] = [false, "40"];

//******************************************************************************

// enum --> Enumeration

enum UserRoles{
    admin = "Farooque Sajjad",
    user = "xyz",
    owner = "Muhammad Sajjad"
}
console.log(UserRoles.owner);


enum StatusCode{
    ABANDONED = "abandoned status code is 500",
    NOTFOUND = "not found status code is 404"
}
console.log(StatusCode.ABANDONED);
console.log(StatusCode.NOTFOUND);

// **********************************************************************

// How to define type?

let x: number = 100;

// Any 
//Allows any type, bypasses checking.
let y;
y = 17;
y = "abc";
y.concat() // technically wrong

// Unknown
// Safer alternative to `any` type.
let z: unknown;
z = 28;
z = "Agha";
// z.concat() this will show you error b/c z is of unknown type
if (z === "string") z.toUpperCase(); // first need to check the type

// void
// Indicates no return value type.
function first(): void {
    console.log("I am First....");
    
} 

//*****************************************************************************
// Null
// Represents an intentional empty value.
let n : null;
// n = "f"; // this will show you error b/c n is of null type

let m: string | null; 
// now m will be either null or of type string
// imp --> getting the data from database



// ************************************************************************************
// Undefined
// Represents a variable without value.
let d: undefined;

// **********************************************************************************
// Never
// The `never` type represents values that never occur, typically used for functions that never return or always throw errors.
function never() : never { 
    while (true) {
        
    }
}
never();
console.log("Hello Ji"); // Unreachable code detected.
