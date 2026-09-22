//=> Object refrence in practise (shallow vs deep copies )
//=> Note console.log() show refrenced objects. for more detailed use gpt.

const jessica1 = {
    firstName : "jessica",
    lastName : "Williams",
    age : 27,
};


function marryPerson(originalPerson, newLastName ){
    originalPerson.lastName = newLastName;
    //=> While changing the object lastName original jessical last name change because of refrence.
    return originalPerson;

}

const marriedJessica = marryPerson(jessica1,"Davis");
//=> when object passed into the function , only the refrence is copied or passed.
//=> It is the same object in the heap.

console.log("Before",jessica1);
console.log("After",marriedJessica);

console.log("--------");

//=> Now we want to create brand new object in the heap without copying refrence but  making new refrence or new object in the heap.
//=>The spread operator only performs a shallow copy. That means nested objects or arrays are not copied deeply—they are still referenced.

const jessica = {
    firstName : "jessica",
    lastName : "Williams",
    age : 27,
    family : [ 'Alice', 'Bob'] 
};

const jessicaCopy = {...jessica}; 
//=> "..." is called spread operator , it is used to create new object in the heap but same properties.
// => It is used to clone object .

jessicaCopy.lastName = 'davis';

console.log(jessica,jessicaCopy);
// Here both jessica and jessicaCopy lastName are different becuase they are two different oject .


//=> But there is  problem due to it shallowcopy.

jessicaCopy.family.push('Mary','john');


console.log("Before",jessica);
console.log("After",jessicaCopy);
//=> Array push on jessciaCopy also affects jessica because of shallow copy .
//=> The spread operator only performs a shallow copy. That means nested objects or arrays are not copied deeply—they are still referenced.
//=> Note : In shallow copy only primitive value are copy , the objects have refrence.
//=> Except all primitives value all are object i.e object literals, function , arrays.



