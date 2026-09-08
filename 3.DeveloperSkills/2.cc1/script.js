let arr = [17,21,23];
let printForest = function(arr){
  for(let i=0; i<arr.length; i++){
    console.log(`${arr[i]}c in ${i+1} days`);
  }
}
console.log(printForest(arr));