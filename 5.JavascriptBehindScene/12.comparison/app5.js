// modern solution of es6
'use strict';



const jonas = {
    firstName : 'Jonas',
    year : 1991 ,

   
    calcAge : function () {

        console.log(this);
        console.log(2037- this.year);

      
        //using arrow function
        const isMillenial = () => {
            console.log(this.year>=1981 && this.year <=1996);
            // Because Arrow function doesn't own "this".
            // Because Arrow function use this keyword from parent scope in this case that will be calcAge method and  doesn't have own this keyword.
            
        };


        isMillenial();
         

    },
   


};

jonas.calcAge();

console.log('----Argument Keyword----');

// Arguement keyword :  Only exist on regular functions / Not generally used in modern javascript.
const addExp = function (a,b) {
    console.log(arguments);
    // It form argument array , you can see in console tab
    return a+b;
}

addExp(2,3);
addExp(2,2,5);

// This is not available to ArrowFunctions

var addArrow = (a,b) => {
    console.log(arguments); // Throw error arguments is not defined.
    return a+b;
};

addArrow(2,5,8);


