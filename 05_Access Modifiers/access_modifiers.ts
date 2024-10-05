

// public: Members are accessible from anywhere, both inside and outside the class. This is the default modifier if none is specified.

// private: Members are only accessible within the class they are declared in. They cannot be accessed from outside the class or from derived classes.

// protected: Members are accessible within the class and its subclasses, but not from outside the class hierarchy.



// class BottleMaker1{

//     constructor(private name: string) {
//         this.name = name;
        
//     }
//     changing() {
//         this.name = "Farooque"
//     }
// }

// let bot1 = new BottleMaker1("Milton");
// bot1.name = "Pata nahi";


// **************************************************************
// class BottleMaker2{
//     private pataNahi: string = "Really Nahi Pata";
//     constructor(public name:string){}
// }

// class MetalBottleMaker extends BottleMaker2{
//     constructor(name: string) {
//         super(name);
//     }
//     getValue() {
//         console.log(this.name , this.pataNahi); // pata nahi will cause error but run in chrome developer tool
        
//     }


    
// }
    
// let m1 = new MetalBottleMaker("Metal");
// m1.getValue();


// **************************************************************************

// Access Modifier --> Protected

class BottleMaker3{
    protected name: string = "BOTTA";
    // constructor(){}
}

class MetalBottleMaker3 extends BottleMaker3 {
    public material: string = "metal"
    change() {
        this.name = "Change Nahi Horaha ha ";
    }
}

let mb1 = new MetalBottleMaker3();
mb1.change();
//mb1.name = "Bahir se change kar rha hun ";
