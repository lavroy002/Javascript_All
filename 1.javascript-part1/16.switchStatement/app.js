// Switch statement.

const day ='riday';
 
switch(day){
     case 'monday' : // day === 'monday
    console.log('plan course structure');
    console.log('Go to coding meetup');
    break;
    case 'tuesday' :
        console.log('prepare theory vidoes');
    break;
    case 'wednesday': 
    case 'thrusday' : 
    console.log('write code examples'); // Trick for execution of same code for both two case which is wednesday and thrusday
    break;
    default:
        console.log("not a valid days");
}