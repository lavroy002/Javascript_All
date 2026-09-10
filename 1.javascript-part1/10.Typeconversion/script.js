// Type converion and Type coercion.

// Type conversion : When we explicitly changed type.
const inputyear = '1991';
console.log(inputyear + 18);
// it will concat the string instead of adding it.


// First changing into the number.
console.log(Number(inputyear)+18); // Note :original inputNumber won't be changed.

// conversion of string to number
console.log(String(23),23);
// Note: When value becomes white in console it means  it is a string.


// Type coercion : Javascript automatically change the types .
console.log('I am '+ 23 + ' years old .')
console.log('23' - '10' - 3); // If there is minus then it changes to number but if there is + than it will concat the  string.
console.log('23'*2);

// qn practise
let n = '1' + 1; // since  " + " so it will concat.
 n = n - 1;         // "-" so it will change to real number and perform operations.
 console.log(n);