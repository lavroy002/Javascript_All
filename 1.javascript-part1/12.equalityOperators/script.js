// Eual operators 
//For preventing bug, always use === operator for comparing .

const age = 18;
console.log('18'===18);
// Strict equality : It doesn't perform type coercion
if(age=== 18){
    console.log('you just become an adult');
}
// Triple equal to means it checks the values and also data type if both of them match then only it returns true value if anone of them is false if returns false values.

// loose equality operator  => It does type coercion
console.log('18'==18);

let newAge = '19';

if(newAge==19){
    console.log('you are in right tracke');
}