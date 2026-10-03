//=> The starter object is written from youtube vidoes.
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

//1.
const [player1,player2] = game.players;
console.log(player1,player2);

//2.
const [gk,...fieldPlayers] = player1;
console.log(gk,fieldPlayers);

//3.
const allPayers = [...player1,...player2];
console.log(allPayers);

//4.
const player1final = [...player1,'Thiago','Coutinho','Perisic'];

//5.
const {odds:{team1,x:draw,team2}} =game;

//6.
console.log(':>---Working on 6th questions----');

const printGoals = function(...players){
  
    console.log(`${players.length} goal were scored`);
    
}

// printGoals('davies','Muller','Lewandowski','Kimmich');
// printGoals('Davies','muller');

// printGoals(game.scored);
//=> Instead of 4 goals it shows only one goals because
//=>[ [ 'Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels' ] ] after reaching with functions. Because it creates array under array.
//=> JavaScript passes it as one single argument — an array.To solve this use spread operator.

printGoals(...game.scored);

//7 Team with lower odd is likely to win more game.without ifelse and ternary operator 

team1 < team2  && (console.log('team1 is more likey to win'));
team2 < team1 && console.log('team2 is more likey to win');






