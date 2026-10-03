//=> Rest pattern and REst parameter.

//=> 🔸 In Simple Terms:
//=> Three dots (...) in destructuring → 🎯 Rest Pattern
//=> Used to collect the rest of the elements or properties in arrays/objects.
//=> Three dots (...) in function definition → 🎯 Rest Parameter
//=>Used to collect the rest of the arguments passed to the function.

//=> Rest : to pack an element in array 
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
  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  
  orderDelivery: function ({starterIndex=1,mainIndex=0,time="12am",address}) // destructuring in function  argument :> In function as we received that object ,we do immediately destructuring , the name of function argument and object property name should be exactly matched.
  //=> The equal sign is for default values when it can't be destructured i.e doesn't find property name.
  {
    console.log(`order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${time}`);
  },
  orderPasta :  function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2}and ${ing3}`);
  }

};

//=> SECTION 1 : DESTRUCTURING

//=> Spread because "RIGHT side" of assignment operator(=)
const arr  = [1,2,...[3,4]];

//=> REST because on "LEFT side" of = operator , i.e in destructuring.
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);


const [pizza, ,risotto,...otherfood] = [...restaurant.mainMenu,...restaurant.starterMenu];
//=> REST should be in last element in destructuring to collect rest element otherwise it throws error.
//=> first right hand side value is kept by unpacking in array then destructuring on left hand side
console.log(pizza,risotto,otherfood);


//objects : rest in object destructuring.
const  {sat,...weekdays} = restaurant.openingHours;
//=> it collect rest of the property of object into its own new object , but not saturday.
console.log(weekdays);

//=> SECTION 2 : FUNCTION CALL

//=>In function defintion : REST  can be used for collecting all(pack an element in array) values so that any length of arguments can be collected , while in function call spread operotor can be used to unpack element .
const add = function(...numbers){
   console.log(numbers);
    let sum = 0;
    for(let i  =0; i < numbers.length ;i++){
        sum += numbers[i];
       
    }
    console.log(sum);
};


add(2,3);
add(3,35, 76 ,28);
//=>Can be used to pass an arbitary length in functions .
//=> Any number of parameters.

const x = [23,5,7];
add(...x); //=> In function calling it becomes spread operator .