"use strict";
class Abcd {
    constructor() {
        this.name = "Farooque";
    }
    changeSomeStuff() {
        this.name = "Farooque Sajjad";
        console.log(this.name);
        this.changeSomeMreStuff();
    }
    changeSomeMreStuff() {
        console.log("Hello Ji");
    }
}
// ***************************************************************
class CupCakeMaker {
    constructor(flavour) {
        this.flavour = flavour;
        this.flavour = flavour;
    }
}
new CupCakeMaker("choco");
