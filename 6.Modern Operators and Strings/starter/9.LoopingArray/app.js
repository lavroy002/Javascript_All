//=> come later once again in this vidoes.
//=> looping Array for of loops.

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

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

//for of loop
for (const item of menu ) console.log(item);
//=> Automatically loop over the entire array and each iteration it will give acces to current . We can still use continue and break keywords

//=> What if we want index , it is headache , we need to use method "entries".
for(const item of menu.entries()){
    console.log(item);
}

//  for (const item of menu.entries()){
//   console.log(`${item[0]+1} : item[1]`);
//  }
//=> We can make short form 
    console.log("---- MAKING SHORTER FORM----");
    //=> Here [i,j] is destructuring of item.
  for( const [i,j] of menu.entries()){
    console.log(`${i} and  ${j}`);
  }