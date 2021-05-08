//let is how you define a variable. Below I'm assigning 7 to the variable `number` and 3 to the variable `number2`.
let number = 7;
let number2 = 3;

//You can create the variable message with no value as seen below.
//Then you can assign it two values (again, seen below.) and JS will pick the most recent (same as Python).
let message;

message = 'hot';

message = 'cold';


//below we're adding the values 7 and 3 from `number` and `number2` respectively.
console.log(number + number2);

//The output of the below log will be the string cold because that is the most recent assigned value for the variable message.
console.log(message);

//The below will throw an error. You should only use let to initiate a variable once.
//Instead of using let twice you would put `variable = 2;` omitting `let`.
let variable = 1;
//let variable = 2;
/*uncomment above line and below line to see the output.
console.log(variable);*/

// JS uses camelcase typically (as seen below)
// const is used to declare a constant variable (can't be changed).
// Technically could make myBirthday -> MYBIRTHDAY because it is a hardcoded constant value.
const myBirthday = '05.12.2020';
console.log(myBirthday)

//All capital letter is used for hard coded values (example below).
const COLOR_WHITE = '#FFF';
console.log(COLOR_WHITE);

//BELOW THIS ARE THE TASKS THAT WERE ASSIGNED AS REVIEW FOR THE CONTENT ABOVE!
let admin;
let name;

name = 'John';
admin = name;
console.log(admin);

let ourPlanetName = 'Earth';
let currentUser = 'Josh';