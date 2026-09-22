if(!numProducts ) deleteCart();
//=> It mean if numProducts is equal to zero/when there isno product than delete cart. 
//=> But without below numProducts has 10 than also it delete carts because in if condition numproducts is called, and the value  of numProducts is assigned to undefined , and if(!undefined ) => truthy value .
//=> NOte : undefined is alos a falsty values.
//=> This all happen because of hoisting.
var numProducts = 10;

function deleteCart(){
    console.log("All products are deleted");
}

//=> Best practise 
//=> Don't use var , use const most of the time .
// => Declare variable at the top of each scope/ First declare the function and use them "only" after declarations for all type of functions.

var x=1;
let y=2 ;
const z= 3;

//=> Window is global object in the javascript browser , The variable declared using var object create properties on the global window object.  Partially correct => if not present in inside any  function

console.log(x===window.x);
console.log(y===window.y);