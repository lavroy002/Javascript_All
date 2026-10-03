
//=>Array destructuring =>  Breaking complex data structure in smaller data structure.
//=> Note for iterable object we use Array destructuring and there is also object distructuring because in object order doesn't matter.
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12, 
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Without destructuring
const arr  = [2,3,4];
const a1 =  arr[0];
const b1 =  arr[1];
const c1 =  arr[2];

//=> using destructuring(unpacking in newVariable)
const [x,y,z] = arr;
console.log(x,y,z);

let [main,secondary] = restaurant.categories;
console.log(main,secondary);


//=> NOw the restuarant owner want to switch the catogory.
// const temp  = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

//=> Switching variables : using desturcturing we don't need temporary variable.
[main,secondary] = [secondary, main]; 
console.log(main,secondary);



//=> if we want  first and third , than just skip the element which don't needed.
const [a, ,c] = restaurant.categories;
console.log(`The value of a:${a} and c:${c} `)