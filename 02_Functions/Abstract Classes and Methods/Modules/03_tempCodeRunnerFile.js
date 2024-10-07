"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_1 = __importDefault(require("./payment")); //  no need to specify {} which importing the defualt export class
let p1 = new payment_1.default(100000);
console.log(p1);
