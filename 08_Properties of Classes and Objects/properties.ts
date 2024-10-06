// Properties of Objects and Classes

// class User{
//     constructor(public readonly name1:string) {
        
//     }
//     changeName() {
//        // this.name1 = "Hello"; // readonly will not let u change name1
//      console.log();
     
//     }
// }

// let u1 = new User("Farooque");

// u1.changeName();


// ***********************************************

// Optional Parameters

class User{
    constructor(public name:string,public age:number,public gender?:string) { // if u put ? after the name of the parameter it becomes optional

    }
}

let u1 = new User("Farooque", 30, "Male");
let u2 = new User("Doreamon",122);

