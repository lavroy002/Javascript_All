'use strict'

console.log(this);
//=> In Global scope , this keyword gives window object

//=> In simple function call
const calcAge = function(birthyear){
    console.log(2037-birthyear);
    console.log(this);
    //=> In simple function call "this" mean undefined in strict mode and in sloppy mode it mean window object.

}
calcAge(1991);
// => without the function attacted to any object.


//=> IN case of arrow functions
const calcAgeArrow = birthYear =>{
    console.log(2037-birthYear);
    console.log(this);
//=> Arrow function doesn't have own "this " keyword , it uses lexical "this" keyword .
// =>  It’s inherited from the closest enclosing non-arrow function — even if that means jumping several arrow functions upward.

}
calcAgeArrow(1980);


const  jonas = {
    year:1991 ,
    calcAge :function() {
        console.log(this);
        //=> "this" keyword will point that object calling the method , in this case jonas object. 
        console.log(2037 - this.year);

    }
};
jonas.calcAge();


//=> Remember function is just a value.
const matilda = {
    year:2017,

};

matilda.calcAge = jonas.calcAge;
// simply copying calAge from jonas to matilda 
//=> we have copy from one object to another object this is called method borrowing.
matilda.calcAge();
// Now prove "this" mean object that is calling the  method , because in console we can see year of 2017 which is present in matlida object.