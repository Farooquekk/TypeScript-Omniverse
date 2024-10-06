// Interfaces and Type Aliases

// Defining Interfaces
// Using Interfaces to Define Obj Shapes
// Extending Interfaces
// Type Aliases
// Intersection Types

function abc(a: number, b: string) {
    // a. // it will give you all functions of number
    // b. // it will give you all functions of string
}

interface user{
    name: string,
    email: string,
    password: string,
    gender?: string // this become optional now this will not give you error if you missed it
}

function getDataOfUser(obj: user) {
    
}
getDataOfUser({ name: "Farooque", email: "farooquekk92@gmail.com", password: "123", gender: "male" });

//****************************************************************************************

// Extending Interfaces

interface User{
    name: string,
    email: string,
    password: string
}

interface Admin extends User{
     admin: boolean 
}

function abcd2(obj: Admin) {
    
}
abcd2({ name: "Farooque", email: "farooquekk92@gmail.com", password: "123", admin: true });

// 2 interfaces of the same name are merged

interface a{
    name:string
}

interface a{
    age:number
}

function abcd3(obj: a) {
    obj.age = 14;
    obj.name = "Jonny"
}




// ****************************************************************************************

// Type Aliases

let a2: number;

type ada = string;

let Ada: ada;

type value = string | number | null;
let vars: value;

type arg = string | null;
function abc1(obj: arg) {
    
}
abc1("KK");


// **********************************************************************************

// Intersection Types

// let a3: string | null; // no

type user2 = {
    name: string,
    email: string,
    
}

type admin2 =user2&{
    getDetails(user2: string): void
}

// Interface:- supports declaration merging and is ideal for defining object shapes.  
// Type:- is more flexible, used for primitives, unions, and complex type compositions.
