// Functions
// function types
// Optional and default parameters
// Rest Parameters
// Overloads

function abcd0(): string{
    return "Hello Ji";
}

function abcd1(name: string,cb:(value:string)=>void) {
    
}
abcd1("Farooque", (value: string) => {
    console.log(value);
    
});

function abcdef(name: string, age: number, cb: (arg:string) =>void) {
    // cb((arg)=>{
        
    // })
    cb("Hello Ji");
}
abcdef("farooque", 21, (arg: string) => {
    console.log("abcd");
    for (let i = 0; i < 10; i++){
        console.log("Hello Ji ",i+1);
        
    }
    
    
})


// ***************************************************************************************

// function abcdef2(name: string, age: number, gender?: string) {
//     console.log("Name of Student :" + name);
//     console.log("Name of Age     :" + age);
//     console.log("Name of Gender  :" + gender);
// }
// abcdef2("Talha", 37, " Male");
// abcdef2("Ada", 28, );

// function abcdef2(name: string, age: number, gender: string="not to be disclosed") {
//     console.log("Name of Student :" + name);
//     console.log("Name of Age     :" + age);
//     console.log("Name of Gender  :" + gender);
// }
// abcdef2("Talha", 37, "Male");
// abcdef2("Ada", 28, );


// *******************************************************************************
// Rest Parameters
// ... rest/spread

// The rest operator in JavaScript (...) allows you to collect multiple elements into a single array. It is often used in function parameters to gather arguments or to combine array elements.



function restPerameter(...args:number[]) {
    args.forEach(element => {
        console.log(element+"*");
        
    });
    
}
restPerameter(1,2,3,4,5);


function friends(...args: string[]) {
    for (let i = 0; i < args.length + 2; i++){
        console.log(args[i]);
        
    }
    
}
friends("Farooque","Talha","Ada","H");

// Spread Operator
// The spread operator in JavaScript (...) allows you to expand an iterable (like an array or object) into individual elements. It's often used for copying arrays, combining objects, or passing elements as arguments to functions.

var arr1 = [1,2,3,4]
var arr2 = [...arr1]
var arr3 = [...arr1, 5, 6];
console.log(arr1,
    arr2,
    arr3
);


// ************************************************************************************
// Function Overloading

// First --> tsc function signature
function abcd4(a: string): void;
function abcd4(a: string, b: number): number;

// function abcd4(a: string, b: number) {
//     if (typeof a === "string" && typeof b == "number") {
        
//     }
// }

function abcd4(a: any, b?: any):void | number{
    if (typeof a === "string" &&  b === undefined) {
        console.log("Hello Ji");
        
    }
    else if(typeof a ==="string" && typeof b === "number") {
        return 12345;
        
    }
    else {
        throw new Error("Something is bad.....");
    }
}

abcd4("Hello Ji");
console.log( abcd4("Hello Ji",40));
