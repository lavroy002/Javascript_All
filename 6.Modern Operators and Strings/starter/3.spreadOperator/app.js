// spread operator: The spread operator allows you to expand elements of an iterable Works on iterables (like arrays, strings, maps, sets not object). into individual elements.

//function destructuring object.

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





//=> Iterable  : Array , string , maps and sets but not object. 
 const arr= [7,8,9];
 const newArr = [1,2,...arr];
 console.log(newArr);

 //=>  spread operator is also helpful for getting individual item of array.

 console.log(...newArr);

 const newMenu = [...restaurant.mainMenu,'Gnocci'];
 console.log(newMenu);

 

 //=>copy Array : ShallowCopy excpet primitive value have refrence.
 //=> But also note that refrence break in creating new object.
 const mainMenuCopy = [...restaurant.mainMenu]

 //=>join 2 array
 const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
 console.log(menu);


 //=>Note  Spread operator doesn't work in template literal
 //=>NOte:🔑 In template literals (${...}), the expression must return something — a single value — which is then automatically converted to a string.
let str = 'jonas';
//  console.log( `${...str}schmedtmann`  ); // Throws error.
//=> Inside parenthesis of console  , it is not expects multiple values seperated by comma.
//=> Multiple values seperated by comma are usually expected when we pass arguements into a functions or when we build a new array.


//=> Ingredient from prompt window
const ingredients = [prompt("let's make pasta! "),prompt("Ingredient2?"),prompt("ingredients3")];
console.log(ingredients);

restaurant.orderPasta(...ingredients);
 //=> The spread operator spread the value using comma.


 //=> IN Es6 spread operators also works with objects even though object is not iterable.
 // => he spread operator (...) performs a shallow copy, not a deep copy. : For more and get rid from confusion once go through chatgpt.
 console.log("---checking with object---");
 const newRestaurant  = {foundedIn:1998 ,...restaurant, founder:'guieseppe'};
 console.log(newRestaurant);

 const restaurantCopy = {...restaurant};
 console.log(":>-----checking deepCopy and shallowcopy of javaScript----i.e Refrence breakout----:<");
 restaurantCopy.categories = ['rama','shyama'];
 //=> REfrence breakout : because newobject is assigned or created.
 //=> When you do restaurantCopy.categories = [...] you create a new array and assign it to restaurantCopy.categories. The original restaurant.categories still points to whatever it pointed to before, so it is not affected.
 console.log(restaurant,restaurantCopy); 

 
console.log("-----------checking deep and shallow copy-------------");
 restaurantCopy.starterMenu.push("hari, mala , jinki");
 console.log(restaurant, restaurantCopy);
 