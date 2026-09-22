//=> Deep Copy/clone

const jessica = {
    firstName : "jessica",
    lastName : "Williams",
    age : 27,
    family : [ 'Alice', 'Bob'] 
};

const jessicaCopy = structuredClone(jessica ); 
// structuredClone => It clone all the nested object , array .etc.






jessicaCopy.family.push('Mary','john');


console.log("original",jessica);
console.log("Clone",jessicaCopy);
