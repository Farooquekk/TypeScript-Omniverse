class Abcd{
    name = "Farooque";
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

class CupCakeMaker{
    constructor(public flavour: string) {
        this.flavour = flavour;
    }
}

new CupCakeMaker("choco");
