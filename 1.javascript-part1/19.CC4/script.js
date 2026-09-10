// using an Ternary operator.
let bill =301;

let tip = (bill > 50) && (bill <= 300) ? (15/100) * bill : (20/100) * bill ;

bill  += tip;
console.log(`The total value is ${bill}
 The total bill value is ${tip}`
           
);