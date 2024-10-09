// Modules

// Exporting and Importing Modules
// Default Exports


import { getDetails, addPayment } from "./payment";

addPayment(1000000);


import Payment from "./payment"; //  no need to specify {} which importing the defualt export class

let p1 = new Payment(100000);
console.log(p1);
