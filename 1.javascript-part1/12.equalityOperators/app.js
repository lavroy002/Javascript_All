// Taking prompt
const favourite = prompt("what is the favourite number");
console.log(favourite);
console.log(typeof favourite);
//Even we have typed number in prompt but it comes in the form of string.


if(favourite ==23){ // since it is loose operator so it does type coercion.
    console.log('Cool!');
}

if(favourite=== 23){  // Always use strict equal operator.
    console.log("Checking");
} else{
    console.log("It is not number so else part is runned.");
}

// So after taking prompt convert into a number.
const myNum = Number(prompt("What is your number"));
if(myNum===13){
    console.log('you rock the world');
}