const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  //=> Computing property name is enhancement in object literal
  //=> Before we can compute only value not property name.
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2+4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};    //=> come again this video because some portion left after understanding all before chapter.
    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta','Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   //=> ES6 Enhanced object literals => We can add property even it is outside object.
    openingHours,
  
    //=> Another Enhancement is , we no longer need to write function and semicolon to function inside object. slightly easier syntax.
  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
};

//=> Object.keys() is a built-in JavaScript method that returns an array of the keys (property names) of the given object.

const properties = Object.keys(openingHours);
console.log(properties);
//=> It is Array with three property Name.

let openStr = `we are open on ${properties.length} days:`;


//=> lOOPING OVER PROPERTY NAME 
for(const day of Object.keys(openingHours)){
  openStr += `${day},`;
    
}
console.log(openStr);

//Property values => It only gives values.
const values = Object.values(openingHours);
console.log(values);



//=>Entire object 
console.log("---:>Looping with object--->");
const entries =   Object.entries(openingHours);
console.log(entries);

//=> Now it can be used loop over the array.
//=> Here is  destructuring and nested destructuring.
for(const [key,{open,close}] of entries){
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}