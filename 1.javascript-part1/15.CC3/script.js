let d1 = 96,d2=108,d3=89;
let k1=88,k2= 91, k3= 110;

let averageD1= (d1+d2+d3)/3;
let averagek1 = (k1+k2+k3)/3;

if(averageD1>averagek1 && (d1 || k1 > 100)){
    console.log("Dolphin is winner");
} else if(d1===k1){
        console.log("nither of them are winner");
} else {
    console.log("k1 is winner");
}