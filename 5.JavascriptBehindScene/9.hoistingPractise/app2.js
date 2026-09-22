// functions expresson and arrow functions  with var.
addExp(2,3);
//=> It will throw error because var when called before initialization gives  undefined according to hoisting and undefined(2,3);

var addExp = function(a,b){
    return a+b;
}
var addArrow = (a,b) => a+b;

// It will throw addArrow is not a function because the  function make with var will give result undefined.
// undefined (2,3) , so addArrow is not a function.



