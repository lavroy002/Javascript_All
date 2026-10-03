//=> destructuring  object => curly braces is used. It is very useful especialy when we are dealing with API call.
// => It mean storing the part of object into another variable.
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

//=> In object the order of element doesn't matter because it is not iterable.
//=> Note: variable name should be exactly matched with  property name of object.
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
//=> This created three new variables based on restaurant object. Extremely important for API call.


//=> If we want variable name different from property name :> It can be achieved by using semicolon ":"
const{name: restaurantName , openingHours: hours ,categories: tags } = restaurant;
//=> This can be also written like this , don't confuse.
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
//  } = restaurant;
//=> This can be also written like this , don't confuse.
console.log(restaurantName,openingHours,tags);

// Default values to variable : that doesn't exist property on object.
const {menu = [] , starterMenu: starters = []} = restaurant;
//=> It mean if there doesn't exist property on resturarant object it give empty array as default.
console.log(menu,starters);
//=> Since there is n't menu property on resturant it gives empty array.


