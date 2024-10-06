"use strict";
// Getters and Setters
// The underscore (_name) is used to differentiate the internal class property from the name getter and setter, which are publicly accessible. This avoids ambiguity when both the internal variable and the getter/setter share a similar name.
class User1 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
    get age() {
        return this._age;
    }
}
let uu1 = new User1("Farooque", 19);
