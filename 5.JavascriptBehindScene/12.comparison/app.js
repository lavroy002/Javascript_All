'use strict';
//=> comparison of arrow function and Regular functions
//=> Chatgpt : Behaviour of arrow functions with different scope.

const jonas = {
    firstName : 'Jonas',
    year : 1991 ,
    calcAge : function () {
        console.log(this);
        console.log(2037- this.year);

    },
    greet : () => console.log(`hey ${this.firstName}`),



};

jonas.greet();
//=> in arrow function , arrow doesn't have own this , They inherit from parent scope so in this case parent is window object/global scope that gives undefined result.

// => Note : if we try to access some property on object which is not available we don't get error just we get undefined.
console.log(this.firstName); // Because in this case this is window object.
console.log(window.lastName);
