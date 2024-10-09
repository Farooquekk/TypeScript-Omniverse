"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
// exporting function
function addPayment(p) {
    console.log(p);
}
function getDetails() { }
// exporting class
class Payment {
    constructor(payment) {
        this.payment = payment;
    }
}
exports.default = Payment;
