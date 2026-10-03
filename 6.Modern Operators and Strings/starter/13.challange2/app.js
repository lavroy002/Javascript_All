const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'kimmich',
            'Goretzka',
            'coman',
            'muller',
            'gnarby',
            'Lewandowksi',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'weigl',
            'witsel',
            'Hazard',
            'Brandt',
            'sancho',
            'Gotze',

        ],
    ],
    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x:3.25,
        team2: 6.5,
    },

};

//=> Object.entries(game.scored) → for objects only.
//=> game.scored.entries() → works only if game.scored is an array, which it is in your case.

for (const [index,player] of game.scored.entries()){
    const str = `goal ${index+1} : ${player}`;
    console.log(str);
   
}

//2 calcualte average odd
console.log("---> working on q2 ---<");

let average = 0;
const odds = Object.values(game.odds);
console.log(odds);
for(const odd of odds) {
    average += odd;
 
}
average /= odds.length;
console.log(average);


//q2  =:> Here we are also destructuring .
for(const [team,odd] of Object.entries(game.odds)){
    console.log(team, odd); 
}