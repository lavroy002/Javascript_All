//=> SECTION 1 : Refrence sharing => No breakout;
//=> This app4.js is made by own for understanding using chatgpt.


const jessica = {
    firstName : "jessica",
    lastName : "Williams",
    age : 27,
    family : [ 'Alice', 'Bob'] 
};

//=> We know that  both are refrencing to same object .
const jessica1 = jessica;

//=> Refrenced is not breakout because it is not copy or clone.
jessica.family = ['ram','shyam','hari'];
//=> jessica1 is not a copy — it's just another reference to the same object in memory as jessica.
//=> So, when you update jessica.family, you're not creating a new object — you're modifying the original object.
//=> Thus, both jessica and jessica1 will reflect the change.

console.log(jessica,jessica1);


//=> Section 2: Function Reference — Still No Breakout
console.log(":> checking for functions refrence behaviour");
const jessica2 = {
    firstName : "jessica",
    lastName : "Williams",
    age : 27,
    family: ['man',"tan","dhan"],
};


function marryPerson(originalPerson, newLastName ){
    originalPerson.lastName = newLastName;
    //=> While changing the object lastName original jessical last name change because of refrence.
    return originalPerson;

}

const marriedJessica = marryPerson(jessica2,"johnson");
marriedJessica.family = ["maka","para","bama"];
console.log(marriedJessica,jessica2);
//=> jessica2 is passed by reference to the function.
//=> Inside the function, originalPerson.lastName = newLastName modifies the original object, not a copy.


//=> SECTION 4 : Reference breakout happens when:
//=> You intentionally break the reference by "creating a new object" (like using Object.assign, spread operator {...}, structuredClone, _.cloneDeep, etc.).

console.log("refrence breakout of using clone/deepcopy/shallowCopy");
const original = {
     name: "Anna",
    friends: ["Tom", "Jerry"],
    family: ['bake','rama','jika']
    };

//=> Break reference using spread operator (shallow copy)
const copy = { ...original };

//=> Modifying copy does NOT affect original — BECAUSE OF PRIMITIVE VALUES!
copy.name = "Elsa";


//=> affects refrence: No refrence breakout , because this not primitive values . 
//=> Here we note that we are updating not assigning/creating new object .
copy.friends.push('mana','pathi');

//=> Refrence break : "creating a new/assigning object"
 copy.family = ['homeo','baji','raji','maka'];
 console.log(original,copy);


console.log(original.name); // "Anna"
console.log(copy.name);     // "Elsa"

