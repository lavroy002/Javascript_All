'use strict';



const jonas = {
    firstName : 'Jonas',
    year : 1991 ,
    calcAge : function () {
        console.log(this);
        console.log(2037- this.year);

        const isMillenial = function() {
            console.log(this.year>=1981 && this.year <=1996);
        };

        isMillenial();
        //=> It is regular function call even it  happens inside the method and rule says , the this keyword is undefined.
        //=> Because isMellenial function is not Method  rather it is normal function call without any object attached to it.

    },
   


};

jonas.calcAge();

// The problem can be solved in app4.js
