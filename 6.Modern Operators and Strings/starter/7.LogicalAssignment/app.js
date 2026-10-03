//Even modern than nullish coalleshing operator .
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

//=> Logical Assignment operators

const rest1 = {
    name: 'capri',
    numGuests: 20,
};

const rest2 = {
    name: 'la pizza',
    owner: 'giavoni Rossi',
};

//=> practical implications : To add a property to other if exist.
rest2.numGuests = rest2.numGuests || 10;
//=> since first value(rest1.numGuests is truthy) value so it return that value immediately either wise 10 is going to be returned.


const rest3 = {
    name: 'john',
    age : 23, 
};
const rest4 = { 
    name:'rama',
    age: 59,
}
//=> Logical Assignment operator.
// rest3.numGuests = rest3.numGuests || 10;
// rest4.numGuests = rest4.numGuests || 10;
//=> if it exist i.e truthy value than nothing i.e assigning same , if it doesn't exist than 10 vlaue assigning.

//=> In simpler manner
rest3.numGuests ||= 10;
rest4.numGuests ||= 20;
//=> If this property exist ie. truthy value than immediately assign that value , if falsy than second expresson is evaluated.
console.log(rest3.numGuests,rest4.numGuests);

//=> Works perfectly well in all situations excpet when value is 0.
//=> can be solved by using nullish(null and undefined is nullish)

// rest3.numGuests ??= 10;
// rest4.numGuests ??= 20;
//=> So it assigns variable when it is nullish that is undefined or null .
// => 0 and '' acts as truthy  values in nullish . 

//=> There is also And assignment operator.
//rest1.owner &&= '<Annanomous>';
//=> If thruthy than assign .


