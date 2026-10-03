//Other data structure maps : A lot more useful than sets .
//=> In maps data stored in key value pairs.
//=> The key is of any types  in map but in object the key is generally of string

const rest = new Map();

rest.set('name','classicaoItaliono');
rest.set(1,'Firenzo');
console.log(rest.set(2,"libson","macos"));
//=> It return the updated values because even we have written console.log before but we also get down-one setted values

rest.set('categories',['italino','babique',"pizzeria"]).set('open',11).set("close",12).set(true,"open");
//=> We can chain the next set because calling the set method returns the updated value.


//=> In order to read data : get method is used in Map data structure

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21 ;
rest.get(time> rest.get('open') && time < rest.get('close'));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
//=> In fact we can use arrays or object as Map keys
const arr = [1,2];
rest.set(arr,'test');

console.log(rest.get(arr));

//=> To remove all the elements from the map
//rest.clear();



