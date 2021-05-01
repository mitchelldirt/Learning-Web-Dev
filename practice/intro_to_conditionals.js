// Conditionals in JS are just like Python `>`, `<`, `>=`, `<=`, `==`, `!=`

// Number comparing is the same as Python
// There is also string comparison as shown below
// Lowercase is actually greater than uppercase because of how unicode works
console.log('Zed' > 'Hamish'); // true because Z is greater than H
console.log('Hamish' > 'Zed'); // false because H is less than Z

// True == 1 and false == 0
// When comparing string number to number number the string is converted to a number.
console.log("01" == 1); // True because "01" becomes 1

// Regular equality (==) can't tell the difference between false and 0 || true and 1.
console.log(0 == false); // True
console.log('' == false); // True as well

// Strict equality === will return false for the above two because they aren't the same type.
console.log(0 === false); // False
console.log('' === false); // False as well

// null = 0 || undefined = NaN
// null == undefined = true BUT null === undefined = false.
console.log(null == undefined); // True 
console.log(null === undefined); // False

// ! UNDEFINED SHOULDN'T BE COMPARED TO OTHER NUMBERS OR VALUES !

/******************************************************************************************************************/
// New section on if, else, and else if.
// Format for if statement:
let hour = 15;
if (hour > 14) {
    greeting = "Good day human";
}

console.log(greeting); // will be good day human because 15 > 14.

// Below will be the format for the else statement:
if (hour > 17) {
    greeting = "Good day human";
} else {
    greeting = "Too early dummy";
}

console.log(greeting); // Will be "Too early dummy" because 15 isn't > 17.

// Below is the format for the else if statement:
if (hour > 17) {
    greeting = "Good day human";
} else if (hour === 15) {
    greeting = "ahhhh, right on time.";
} else {
    greeting = "Too early dummy";
}

console.log(greeting); // Will output "ahhhh, right on time" because hour == 15.

/*****************************************************************************************************************/

// New section on logical operators (OR ||, AND &&, NOT !)

// Examples of OR operator below:
let a = 2
let result = a || b; // This is just syntax if you use the operator initializing a variable.

// This is a more practical example of || operator.
// You can pass more than one argument. weekend is the third argument show in the example below.
// Looks for the first true value unlike and which looks for all true values (will be shown below)
hour = 5;
let isWeekend = true;

if (hour < 6 || hour > 5 || isWeekend) {
    call = "Sorry, the office is closed right now!";
}

console.log(call);

// You'll have to run these in browser to see the results in console.
console.log(1 || 0); // 1 (1 is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)

console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// Below is a very practical use of the OR || operator:
let firstName = "";
let lastName = "";
let nickName = "coderman";

console.log(firstName || lastName || nickName || "Anonymous"); // If everything is false Anonymous is output.

// Below shows another practical use (Could be actual printer message)

true || console.log("Did not print: Failure");
false || console.log("Printed Successfully");

// NEW SECTION: && AND operator
let b = 4;
let result2 = a && b;
hour = 12;
minute = 30;

if (hour == 12 && minute == 30) {
    console.log('The time is 12:30');
}

if (1 && 0) {
    console.log("won't work, because 0 == false");
}

// && Looks for the first false value unlike or which looks for the first true one.
// If first operand is true it reuturns second one:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// See below where first false value is returned.
console.log(1 && 2 && null && 3); // null

// When all are true last one is returned
console.log(1 && 2 && 3); // 3

// the NOT operator returns the inverse boolean value, examples below:
console.log(!true); // false
console.log(!0); // true

// a double NOT converts the value to boolean and return inverse
console.log(!!"string"); // true
console.log(!!null); // false

// Boolean is a more verbose way to do the above
console.log(Boolean("string")); // true
console.log(Boolean(null)); // false

// && is higher precedence than ||
let age = 35
if (14 <= age <= 90) {
    console.log("All clear");
}

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// Write login prompt code below:
let username = prompt('Please enter your name to login', '');

if (username === 'Admin') {
    let pass = prompt('What\'s the password', '');
    if (pass === 'TheMaster') {
        alert('Welcome!');
    }
    else if (pass === '' || pass === null) {
        alert('Canceled');
    }
    else {
        alert('I don\'t know you');
    }
} else if (username === '' || username === null) {
    alert('Canceled');
}
else {
    alert('I don\'t know you');
}

// format or statements like this if doing multiple conditions.

let x = 5;

if (x === 3 || x === 5 || x === 7 || x === 9) {
    console.log('wowza');
}

// EXAMPLE OF SWITCH CASE.
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    switch (choice) {
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
        default:
            para.textContent = '';
    }
}

// This is the syntax for a Ternary operator (?) -->  ( condition ) ? run this code : run this code instead

// BELOW HERE IS THE CODE FOR THE CALENDAR PROBLEM ON MDN DOCS