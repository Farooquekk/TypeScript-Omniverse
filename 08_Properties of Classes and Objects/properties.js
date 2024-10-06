"use strict";
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
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let u1 = new User("Farooque", 30, "Male");
let u2 = new User("Doreamon", 122);
