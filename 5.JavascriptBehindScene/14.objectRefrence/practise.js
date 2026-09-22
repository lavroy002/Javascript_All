//=> Object refrence in practise (shallow vs deep copies )

const jessica1 = {
    firstName : "jessica",
    lastName : "Williams",
    age : 27,
    income: [1200,14400,1700,1900],
};


console.log(jessica1);

const jessica2 = {...jessica1};
jessica2.income.pop();



