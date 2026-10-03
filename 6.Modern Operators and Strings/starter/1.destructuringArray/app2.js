
//=> function returning an array and then destructuring in to different variables. 
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];

  }
};

//=> write a function to order food.

//=> Destructuring
//=> Receiving a 2 return values from a function.
const [starter,main] = restaurant.order(2,0);
console.log(starter,main);


const Nested = [2,4,[4,6]];
const [i, ,j] = Nested;
console.log(i,j);

//=> for all individual values like j is array, so we have to perform destructing inside destructuring.
//=> Nested destructuring.
const[k, ,[l,m]] = Nested;

//=>Destructuring with default values => The values values which is assigned is default values if value not find .
//=> Application : This is useful when we don't know the length of array that when taking input or getting data from API.
const [p=1,q=3,r=2] = [8,9];
console.log(p,q,r);


