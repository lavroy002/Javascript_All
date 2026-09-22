'use strict';
console.log("app2.js"); // Just to confirm the file is working

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this); // Logs the value of `this`
        console.log(2037 - this.year); // Calculates age based on `this.year`
    }
};

jonas.calcAge(); // Method call — `this` refers to `jonas`

const f = jonas.calcAge;  // f is now a standalone function (function expression)
f(); 
// => Note: When f() is called as a standalone function,
//          `this` is undefined (in strict mode), so `this.year` becomes undefined,
//          and 2037 - undefined results in NaN.

// => This means copying the function into a new variable like `f`
//    detaches it from the original object (`jonas`).

// ❗ Don’t confuse `jonas.calcAge()` (which calls the method directly)
//    with `const f = jonas.calcAge` (which copies the function without context).
