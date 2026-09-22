  // Note functions is block scoped like let and const.
  'use strict'
  function addName (lastname){
    const fullName = firstName + lastname;
    console.log(firstName);
    // firstname is not present in local sope so it look up for variable  upward in scopechain .
    return fullName;
  }

  const firstName = 'jonas';
  addName(1991);


  function calcAge(birthYear){
     const age = 2037 - birthYear;

     function printAge(){
        const output  = `${firstName},you are ${age}, born in ${birthYear}`;
        // here the scope of firstName is in grandparent scope two level up in scope chain.
        
        console.log(output);
        //  block scope
        if(birthYear >= 1981 && birthYear <=1996){
            var millenial = true;
            const str = `oh,you're a millenial, ${firstName} `;
            console.log(str);
            // Note: let and const are block scope but var is nearest functions scope in this case printAge function.
            function add(a,b){
              return a+b;

            }

        }
        // add(2,3); 
        // it throws refrence error because function is also block scoped in strict mode => It mean it is not accessible outside the the block i.e if block in this case.
        
        console.log(millenial); // since var is function scope :it can be accessed outside the local   scope but inside same/nearest function.
     }
     
     printAge();
     return age;
  }
  calcAge(1991);
//   console.log(age); => it throws error because outerscope havenot access of inner access.
// printAge() ;=> likewise we cann't call here because for the same reason.It throws refrence error.
// Note : javascript tries to find variable or functions in Current/nearest Scope and 
// Note : you can write same name variable in different Scope.
// Note: we can also redefine variable name from inner Scope.