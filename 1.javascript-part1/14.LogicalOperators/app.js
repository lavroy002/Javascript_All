// Logical operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); 
// since , it is AND operators , both of them is true so the result is true.

// ! operator = Is used to invert the values.

console.log(!hasDriverLicense && hasGoodVision); // f and t => f

const shouldDrive  = hasDriverLicense && hasGoodVision;

if(shouldDrive){
    console.log('sarah is able to drive');
} else {
    console.log('someone else should be drive');
}