
// exporting --> function 
export function addPayment(p: number) {
    console.log(p);
    
 }

export function getDetails() { }


// exporting class
export default class Payment{  // need to add export default for exporting class
    constructor(public payment:number){}
}
