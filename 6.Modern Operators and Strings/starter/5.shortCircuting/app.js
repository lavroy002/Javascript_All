//=short cicuiting

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
}
//=> use ANY data type , return ANY data type
console.log("---ShorCircuting with OR---");
console.log(3 || 'jonas');
console.log(true || 0);
//=> This is called shortcircuiting.
//=> If first value is truthy value than immediately return that truthy value ie. if first value is truthy than even other operand is not eveluated .

console.log(''||'jonas');
console.log(undefined || 'jonas');
//=> if first value is falsy value than second operand is also evaluated and second value is returned.

console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23);

//practical implications : setting default values if its value doesn't exist
 restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Setting default vlaues using shortCiructing.
const guests2 = restaurant.numGuests || 10;
//=> It will return first values because first value is truthy.
console.log(guests2);
//=> Both will not work if resturant.numGuest = 0 ; 



console.log("----ShortCircuting with AND---");
console.log(0 && 'Jonas');
//=> if first value is falsy then it immediately return that falsy value  without evaulating the second operand.
console.log(7 && 'jonas');
//=> if first values is truthy than evaluation continues and second value is retuned.


console.log('Hello' && 23 && null && 'jonas');

//=> practical implications : Checking if this method exist , we want to call
if(restaurant.orderPizza){
    restaurant.order('mushrooms','spinach');
}
//=> using And operator we can do in simpler way

restaurant.orderPizza && restaurant.orderPizza('mushrom','spinach');
//=> Here first resturant.pizza is evaluated if it truth than only second expression is evaluated.
//=> Shorthand of if.


