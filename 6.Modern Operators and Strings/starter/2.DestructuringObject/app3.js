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
  }


};

restaurant.orderDelivery({
    time: '22:30',
    adress: 'via del sole, 21' ,
    mainIndex: 2,
    starterIndex:2,
}); //=> Functin call passing object 


restaurant.orderDelivery({
    adress:'vaia dal mang',
    startindex:1,
    //We are not passsing time but we are getting with destructured values 
});

//=> This becomes more easy for more argument get increased.