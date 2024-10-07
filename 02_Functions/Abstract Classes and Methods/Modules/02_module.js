"use strict";
// Modules
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Exporting and Importing Modules
// Default Exports
const payment_1 = require("./payment");
(0, payment_1.addPayment)(1000000);
const payment_2 = __importDefault(require("./payment")); //  no need to specify {} which importing the defualt export class
let p1 = new payment_2.default(100000);
console.log(p1);
