//=> In ES 2025 set got seven more method .

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//=>Which food is common in both of them.


//=> Intersection method
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]); //=> Converting set to arrays. Before we have to use filter method.

//=> Union : It doesn't have duplicate.
const italianMexicanFusion = italianFoods.union(mexicanFoods);
//=> [...italianMexicanFusion] , now this will convert to array.
console.log(italianMexicanFusion);


//=> Second way to do so 
console.log(new Set([...italianFoods,...mexicanFoods]));

//=> set difference : Here the order matters.
const uniqueItalionsFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalionsFoods);


