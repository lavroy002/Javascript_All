'use strict';
// Case using var : preety dangerous

//=>Note : var actually create property on global object.
   var firstName = "matella";

const jonas = {
    firstName : 'Jonas',
    year : 1991 ,
    calcAge : function () {
        console.log(this);
        console.log(2037- this.year);

    },
    greet : () => {
        console.log(this);
         console.log(`hey ${this.firstName}`);
         // Because in this case this is window and  in window there is already firstName property due to variable created by using var .
         // this.firstname is translated as window.firstName

    }



};

jonas.greet();
//=> Even it is called by jonas object but that rule doesn't apply here becuase it is arrow function.
 
//=> Best practise , Never use as arrow function as method.

