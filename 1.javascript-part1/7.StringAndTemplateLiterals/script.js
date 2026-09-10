const firstName = 'Jonas';
const job = 'teacher';
const birthyear =1991;
const year = 2037;
const jonas = " i'm " + firstName + ' ,a ' + (year-birthyear) + ' years old ' + job +' ! ';
console.log(jonas);

// template literals for such complex structure.

 const jonasNew  = `I'm ${firstName} , ${year-birthyear} year old ${job} ! `
 console.log(jonasNew);

 // you can also  use backticks for regular string.
 console.log(`Just a regular string...`);

 // For multiline string
 console.log(`this is the sum of narrator
using the main theme of idea 
      our aim is to eradicate the problems.`);