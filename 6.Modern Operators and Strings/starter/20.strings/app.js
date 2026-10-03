
const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);

//=> Some method of strings
//=> String are also zero based index.

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

//=> Note that : strings arenot immutable because they are primitives so we have to store in some variable or some other data structure  to use in future.

console.log(airline.slice(4)); //=> Starts from 4th index.
console.log(airline.slice(4,7)); //=> Doesn't include 7th index.

//=> For dynamic coded
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1)); //it mean starting index is from first index and it will stop before -1 index.

console.log("working on functions ");
const checkMiddleSeat = function(seat){
    //=> B and E are middle seat 
    const s = seat.slice(-1);
    if(s==='B' || s==='E') console.log('you got middle seat');
    else console.log("you are lucky");
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//=> why method is working on string? Shouldn't be method available on object? why we can apply method like slice in primitive value that is string?
//=> Acutally even string is primitive values , whenever we call a method on a string , javaScript automatically behind the scene converts string primitive to string object  with same content.

//=> When operation is completed , the object is converted back to regular  string ie.  primitive , infact all string method return primitive even called on string object.
