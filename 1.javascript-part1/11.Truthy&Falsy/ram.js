// Truthy & Falsy values :While converting to Boolean data type

// 5 falsy values : 0, 'emptystring' , undefined , null , NaN and 
// Everthing else is truthy values.

 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean("jonas"));
 console.log(Boolean('')); // Empty string is falsy values.
 console.log(Boolean({})); // Empty object is also truthy values.


 const money = 0;
 if(money){
    console.log("Don't spend it all ");
 } else{
    console.log('you should get a job');
 }
 // since 0 always gives falsy values so we always get else statement results.
 // In logical context which is inside parenthesis in this case always have boolean values if it don't have boolen then javascript tries to convert into boolean values. 
 /* Logical conditions (also called logical expressions or logical operations) are expressions that evaluate to either true or false. They are used in programming to make decisions, control the flow of execution, and compare values  */

