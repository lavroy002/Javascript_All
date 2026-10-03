//Error : Error occured during mutating the variable with destructuring.
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

//=> Mutating variables :> reassignment
let a= 111;
let b = 999;

//=> There is a object.
const obj = {a:23,b: 7, c: 14};
// let {a,b} = obj;  
// :> cann't redeclare variable in the same scope .
// OR 
// {a,b} = obj ;

//=> Because javascript see  code block , when starts with curly braces{} . for more gpt.
// :> And we cann't assign to a code block it throws error.


//=> To solve this wrap destructuring in assignment.
({a,b}= obj);
console.log(a,b);



//Nested object destructuring :> friday is an object which is inside opening hours object which is also in restaurant object.
console.log(`---Nested destructuring-----`);


//=>first way:A lot object can be selected in this way.
const{fri:{open,close}} = restaurant.openingHours;
console.log(open, close);
//=> Great logic => see nicely how sat is achieved and inside sat wake and sleep is achieved , see nicely.
const{name,location:adress,openingHours:{sat:{open:wakeup,close:sleep}},openingHours:{sat:endday}} = restaurant;
console.log(`name:${name},adress${adress},wakeup${adress},sleep:${sleep},endday${endday}`);


//=>second way: more exact position to select and create new variable
const {
  open: starting = [8],
  close: ending = 50,
  midtime: evening = "3am",
 } = restaurant.openingHours.fri;
console.log(starting, ending, evening);

// => for ourself : in this Way can we destructure outer layer and inner layer.
const {
  openingHours : rama,
  openingHours: {thu:johnson,fri:rinki},
// openingHours : rama {thu:johnson,fri:rinki}; // Invalid :> throws error.
} = restaurant;
console.log(rama);
console.log(rinki);
console.log(johnson);

