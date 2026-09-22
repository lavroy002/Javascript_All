//=> Object refrence in practise (shallow vs deep copies )

const jessica = {
    firstName : "jessica",
    lastName : "Williams",
    age : 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
//=>Note: Even the object is const , it mean it adress pointing  cann't be changed but we can change the property value inside object.

console.log('before:',jessica);
console.log('after',marriedJessica);
//=> Even we change lastName of married Jessica but it change the lastName of original jessica  due to object refrence , they point the same object.
//=> Actually they didn' create a new object in the heap , married jessica is exactly same refrence as jessica. They are two variable that point the exact same object in the heap.


// jessica= {x:23}
//=> since jessica is const , we can't assign new object , this is new object and get new refrence in the heap which throws error . 
//=> It would allowed if jessica is declared with variable "let";


jessica.age = 30;
//=> We can change property but cann't assign new object declared with object "const";
//=> It is permissible.