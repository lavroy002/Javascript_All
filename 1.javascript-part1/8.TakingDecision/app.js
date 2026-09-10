// Types of Control Structures
//1 : Conditional Statements (Decision-making):

const age =19;
const isOldEnough = age >=18; // (age>=18 either gives true or false)
// Note comparison opertor always give either truthy or falsy values

if(isOldEnough){ //  Inside parenthesis it is either include truthy or falsy values.if it is truthy values then only code runs inside the curly bracket.
    console.log('I am hero and starting new journey of life');
} else{
    console.log("even we are hero.");
}


const birthyear = 1991;
let century; 
// We cann't add century inside if-else statement because if it comes in block and it is not accessible outside the block.
if(birthyear <=2000){
    century = 20;
}
console.log(century);
