// Type Guards and Typescript utility Types
// Using typeof and instanceof
// Partial, Required, and ReadOnly


// type guards --> type narrowing

function guards(args: string | number |any) { // type narrowing 
    if (typeof args === "number") {return "number" }
    else if (typeof args === "string") { return "string"}
    else { throw new Error("Only accept string or number") }
}

console.log(guards(10));
console.log(guards("Hello"));
guards(true);


// typeof instanceof --> instance narrowing

class TvKaRemote{
    switchTvOff() {
        console.log("Switching off the TV...");
        
    }
}

class CarKaRemote{
    switchCarOff() {
        console.log("Switching off the CAR...");
        
    }
}

const tv = new TvKaRemote();
const car = new CarKaRemote();

function switchOffKaro(device : TvKaRemote| CarKaRemote) {
    if (device instanceof TvKaRemote) { device.switchTvOff();}
    else if (device instanceof CarKaRemote) { device.switchCarOff();}
}
