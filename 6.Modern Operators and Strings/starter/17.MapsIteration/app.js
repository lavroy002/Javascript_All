console.log('just to confirm 17 app.js is working');


    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2+4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const question = new Map([
    ['question','what is the best programming language in the world'],
    [1,'c'] ,
    [2,'java'],
    [3,'javaScript'],
    ['correct',3],
    [true,'correct'],
    [false,'try again!'],

])
console.log(question);

//=> implementing little quiz
//=> Convert object to Map

console.log(Object.entries(openingHours));
const hours = new  Map(Object.entries(openingHours));
//=> Because object.entries(openingHours) returns array inside array which is syntax for creating Map.

console.log(hours);


//=> Since Map is iterable we can also use for loop 
console.log("*******************");

for (const [key,value] of question){
    if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

const answer = Number(prompt('your answer'));
console.log(answer);

//=> Alikati logic xa
console.log(question.get(question.get('correct')  === answer ));


//=> Convert map to array
console.log("+++++++++++");
console.log([...question]);