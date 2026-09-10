// cc2 means coding challenge 2.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn/ ( heightJohn*heightJohn);
const markHigherBMI  = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log(BMIMark,BMIJohn);

if(BMIMark >= BMIJohn){
    console.log(`Mark BMI :${BMIMark} is greater than John BMi: ${BMIJohn}`);
}
else {
    console.log(`Mark BMI:${BMIMark} is less than John BMI:${BMIJohn}`);
}