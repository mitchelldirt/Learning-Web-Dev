// Below is an example of an array
let example = [1, 2, 3, 4, 5];

// How to change an item in an array
example[0] = '1';

// Arrays are technically object *SEE BELOW*
let person = { firstName: 'Mitchell', lastName: 'Mudd', age: 20 };
console.log(person.firstName);
// The above outputs Mitchell because that is what first name is listed as.

// You can technically store objects in arrays because arrays are objects
let objectArray = [Date.now, 2, 3, 'cow'];

// Array properties and methods are extremely useful
let arrayLengthExample = example.length; // This is property so no parentheses
console.log(arrayLengthExample);
let sortedExampleArray = example.sort(); // Method so it uses parentheses
console.log(sortedExampleArray);

// How to access first element in a list
console.log(example[0]);

// how to access last one
console.log(example[arrayLengthExample - 1]);

// HOW TO LOOP BELOW
let text = '<ul>';
let i;

for (i = 0; i < arrayLengthExample; i++) {
    text += '<li>' + example[i] + '</li>'
}
text += '</ul>'

// how to use the array.forEach() method
let text2 = '<ul>';
example.forEach(myFunction);
text += '</ul>';

function myFunction(value) {
    text += '<li>' + value + '</li>';
}

// Adding items to a list
example.push(6);

// Arrays in javascript ONLY use numbered indexes not named ones
// You can verify an object is an array with Array.isArray();
console.log(Array.isArray(example)); // returns true

// another more universal way to do the above is with a function
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(example)); // returns true

// another way to do the above two
console.log(example instanceof Array); // returns true

// CONTINUE WITH WS3 Array Methods / properties article
