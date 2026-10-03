//=> THE NULLISH COALESCING OPERATOR (??)
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

//=> For checking whether it exist 
//=> It gives wrong result
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
//=> Even restuarant.guests exist with value 0 but it will set set guests as 10 because of "OR" operator since first value as falsy and so it selects second value


//=> Can be solved by using Nullish values
//=> logic same as || operator but nullish value is only null and undefined
//=> Nullish : null and undefined  (NOT 0 or '');
const guestCorrect = restaurant.numGuests ?? 10;
//=> if first is nullish then second value is returned.
//=> But in this case 0 is  not nullish so 0 is returned.
console.log(guestCorrect);