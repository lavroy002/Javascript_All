//=> sets is collection of unique values.


const orderSet = new Set(['pasta','pizza','pizza','Risotto','pizza']);
console.log(orderSet);
//=> No  key value pair , sets are also iterable

//=> It is different from array because its element are unique , second order of the element in the set are irrelevant.

console.log(new Set ("jonas"));

console.log(orderSet.size);
console.log(orderSet.has('Pizza')); //=>  This is similar to include method in array
console.log(orderSet.has('Bread'));


orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); //=> only one time added because it has to be unique

orderSet.delete('Risotto');
console.log(orderSet);

//=> We cann't retrieve element from set because it have unique element it is best for checking elements that is unique.

//=>  sets are also iterables

for(const order of orderSet){
    console.log(order);
}

//=> The main case is actually to remove duplicate values in the array.

const staff = ['Waiter','Chef','Waiter','manager','Chef','Waiter'];


//=> How to convert array from staffUnique to array
//=> Remember spread oprators work on all iterable  since set is iterable .

const staffUnique = [...new Set(staff)] ;
//=> Here spread oprator spread value of iterable .
console.log(staffUnique);


//=> How many different letter are present in jonasschmedtmann ?

console.log(new Set('jonasschmedtmann').size);


//=> To manipulate method use always array because it has a lot of methods. for unique values use set.