//=> string methods
const airline = 'TAP Air portugal';
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//=> Fix capitalization in name
const passanger = 'jONas';
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passanger[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

//=> comparing email

const email = "helow@macos.io";
const loginEmail = ' Helow@macOS.IO \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

//=> Doing in one step
const normalizedEmail  = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail); 

console.log(email===normalizedEmail);

//=> Replacing 
const priceGB = '288,97£';
const priceUs = priceGB.replace('£','$').replace(',','.'); //=>chaining
console.log(priceUs);

//=> It only replace the very first occurance of the search string.
const announcement  = 'All pessangers come to the Boarding door 23. Boarding door 23!';
console.log(announcement.replace('door','gate'));
//=> It only changes the first door . To replace all use replaceAll method :> It replace multiple occurance of the string.
console.log(announcement.replaceAll('door','gate'));


//=> Method that return booleans
const plane = 'Airbus 320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));


//=> either it is belongs to airbus family .
if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('part of the NEW Airbus family');
   
}   

//practise exercise 

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
   if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('you are not allowed on board');
    }
    else{
        console.log('WELCOME TO BOARD');
    }
}
checkBaggage('I have a laptop,some Food and an pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks anda gun for protection');