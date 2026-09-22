'use strict';

// problem can be solved of this using extra variable i.e old solution 

const jonas = {
    firstName : 'Jonas',
    year : 1991 ,

   
    calcAge : function () {

        console.log(this);
        console.log(2037- this.year);

        const self = this;

        const isMillenial = function() {
            console.log(self.year>=1981 && self.year <=1996);
            // Through scope chain the self get value.
        };

        isMillenial();
         

    },
   


};

jonas.calcAge();


