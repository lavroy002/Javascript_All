    //=> Optional chaining


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

if(restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon);//=> It throws error so first we need to check before monday 

}

//=> With optional chaining if certain property doesn't exist than undefined is returned immediately.

//=> with optionalchaining (ES2020)
//=> Nullish property
console.log(restaurant.openingHours.mond?.open) //=> undefined instead of throwing error.
//=> It mean before monday if property exist than only next property will read next property i.e open in this case.
//=> If it doesn't than it will immedately show undefined.
//=> after ? the next operation try to read ie. open in this case only happens if before it not null is undefined.
console.log(restaurant.openingHours?.mon?.open);


//=> Without optionalChaining error.
// console.log(restaurant.openingHours.mond.open) ;
//=> throwing error in console tab.

console.log("--->working on real world implications---> ")
//=> Real word implications : whether the restaurant is close or open on each of  days.
const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
for(const day of days){
    console.log(day);
    //=> First destructuring i.e saving variable in day i.e property name and variable name should be matched.
   const open = restaurant.openingHours[day]?.open;
   //=> for each iteration , resturanat.openingHours[mon] :> return object  in the that day variable because of destructuring and we perform optional chaining. optional chaining relies on nullish values.
   
   console.log(`on ${day}, we open at ${open}`);

} ;


//=> To check whether method exist 
//=> restaurant.order?.(0,1) , it mean if exist than  call method and againg nullish works lik or variable OR
//=> if if returns undefined or null than only "method doesn't exist " works.
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0,1) ?? 'method doesnot exist');


//Arrays 
console.log("----->optional chaining checking on Arrays<------");
//=> Basically we can check whether array is empty.
const users = [
  {name:'jonas',email:"hello!@jonas.io"}
];
console.log(users[0]?.name ?? 'user array empty');
//=> if user[0]  exist than only take name . Also note that ?? works with nullish values.

//without optional chaining we have to write like this.
if(users.length > 0 ) console.log(users[0].name);
else console.log('user array is empty');