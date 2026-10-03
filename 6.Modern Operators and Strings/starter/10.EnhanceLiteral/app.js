//=> Enhanced object literal : You’re literally writing the object directly into the code. It has key-value pairs.

    //=> Third Enhancement is we can "compute" property name 
    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

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
};
//=> You can directly console in cosole tab of chrome to see changes.



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   //=> ES6 Enhanced object literals => We can add property even it is outside object.
    openingHours,
  
    //=> Another Enhancement is , we no longer need to write function and semicolon to function inside object. slightly easier syntax.
  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
};

console.log(restaurant);
//=> Now you can also see opening hours in this object.