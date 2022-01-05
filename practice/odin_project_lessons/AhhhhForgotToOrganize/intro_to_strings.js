// How to create a string
let string = 'string';
console.log(string);

/* Errors with forgetting quotes:
"missing; before statement" --> forgot first quote.
"unterminated string literal" --> forgot end quote.
*/

/* Below shows how to use an escape key so that the string doesn't just contain the I.
You can join as many strings together as you like. */
let bigmouth = 'I\'ve got no right to take my place...'
console.log(bigmouth);

// You can concatenate strings.
let one = "Hello "
let two = "world!"
let joined = one + two;
console.log(joined);

// Adding numbers in strings just concatenates them as strings.
let myDate = '19' + '67';
console.log(typeof myDate);

// You can use `Number` object or toString() method to swap the type of the variable.
let num = 15;
let str = '15';

console.log(typeof num);
console.log(typeof str);

let newNum = Number(str);
let newStr = toString(num);

console.log(typeof newNum);
console.log(typeof newStr);

// string literals using `backticks` is like f-strings in Python.
let song = `Ghost Town`;
let score = 9;
let highestScore = 10;

// Below is an example. ${} is used to insert the variable.
let output = `I like the song "${song}". I gave it a score of ${score / highestScore * 100}%.`;
console.log(output);

// You can use actual linebreaks in string literals but not in regular strings.
// EXAMPLE BELOW (1st is regular | 2nd is string literal)
output = 'I like the song "' + song + '".\nI gave it a score of ' + (score / highestScore * 100) + '%.';
console.log(output);

output = `I like the song "${song}".
I gave it a score of ${score / highestScore * 100}%.`;
console.log(output);

/*******************************************************************************/
// New section on string methods:

// .length returns the length of the string.
let txt = 'abcdefghijklmnopqrstuvwxyz';
console.log(txt.length);

// .indexof() returns index location of the value in parentheses. (-1 if not found)
str = 'What does the fox say fox';
console.log(str.indexOf('fox'));

// .lastindexof() same thing just the last index location. (-1 if not found)
console.log(str.lastIndexOf('fox'));

// you can use a second parameter in both indexof and lastindexof
// 15 specifies the spot to start
console.log(str.indexOf('fox', 15));

// lastindexof() searches backwards so keep that in mind.
console.log(str.lastIndexOf('fox', 21));

// .search() does the same thing as .indexof()
// search cannot take a second start position argument
// indexof cannot use RegEx but search can.
console.log(str.search('fox'));

// .slice() is used to slice a string. 
// Remember UP TO BUT NOT INCLUDING!
console.log(str.slice(14, 17));

// negative slice starts from the end of the string.
console.log(str.slice(-11, -8));

/* omitting the second parameter means it will slice the entire string from the
index location provided */
console.log(str.slice(3)); // t does the fox say fox
console.log(str.slice(-3)); // fox

// .toLowerCase() converts a string to all lower case
console.log(str.toLowerCase()); // `W` is lowercase

// .concat is used to concatenate strings. *SAME AS ADDING STRINGS*
console.log("Hello".concat(" ", "World!"));

// .trim is used to remove whitespace *NOT SUPPORTED ON IE 8 OR LOWER*
let thing = "           Hello World!         ";
console.log(thing.trim()); // Hello World!

//.padstart() and .padend() are used to add padding to strings.
str = '5'
str = str.padStart(4, 0);
console.log(str);

// padEnd didn't work when trying to modify variable str from above :(
let secondStr = '5'
secondStr = secondStr.padEnd(4, 0);
console.log(secondStr);

// .charAt() grabs the character in the index position given.
str = 'HELLO WORLD';
console.log(str.charAt(0)); // H

// charCodeAt() returns UTF-16 code of a character in a string.
console.log(str.charCodeAt(0)); // 72 is the UTF-16 code for capital `H`

// .split() turns strings into an array. Parameter decides what character it splits by.
console.log(str.split("")); // [H, E, L, O, O, ' ', W, O, R, L, D]

// .replace() can replace a part of a string with something else. *TWO PARAMS*
console.log(str.replace('HELLO', 'GREETINGS'));
