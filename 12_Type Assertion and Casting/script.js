"use strict";
// Type Assertion
// Type Casting
// Non-null assertion operator
// Type Assertion in TypeScript is a way to tell the compiler, "I know the type of this value better than you do." It lets you treat a value as a specific type when TypeScript can't automatically figure it out.
let a0 = 12;
// a0.  // will not show me any intelliscence
a0.toExponential;
a0.length;
// ****************************************************************************************
// Type Casting
let n1 = Number("23");
console.log(n1);
console.log(typeof n1);
// ****************************************************************************************
// Non-null assertion operator
let oper;
oper = "12";
oper.substring; // oper is noe not null and undefined
