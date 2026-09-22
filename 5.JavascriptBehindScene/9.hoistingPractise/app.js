// for 8 use pdf.
//=> This means you can change is comment later . It is acutal comment for understanding.

//=> Hoisting with variables : Accessing variables before initialization.
console.log(me);

// console.log(job); 

// console.log(year); 
// let job = 'teacher';
//=> This is hoisting in the temporal dead zone.
var me = 'jonas';
const year = 19191;


//=> Accesing functions before they got declared.
// Functions 
console.log(addDecl(2,3));

// console.log(addExpr(4,5)); 
// console.log(addArrow(5,6));
//=> The functions expresson (but not function declaration ) works as variables so throws error before initialization becuase functions are also in temporal dead zone.
//=>The function expresson made with let and const will throw error of uncaught refrence where as made with var show undefined.
 

//=> This is function declaration => The function declaration is accessible everywhere .
function addDecl(a,b){
    return a+b;
}

//=> This is function expression
const addExpr = function(a,b){
    return a+b;
}

const addArrow = (a,b) => a+b;