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

// toString() converts array to comma delimited string
console.log(example.join());

// You can also use toString() with a delimiter parameter
console.log(example.join(' * '));

// pop() will remove the last item in an array
example.pop(); // removes 6

// gives last value to a variable
let lastValue = example.pop();
console.log(lastValue); // 5 because 6 was removed above

// push() pushes an item into an array and can also return the length
console.log(example.push(5)); // logs 5 because that is the length of the array
console.log(example); // 5 is included now

// shift() removes the first element in a list (same as pop just the zero spot in an array)
console.log(example.shift()); // removes '1'

let shiftedValue = example.shift(); // removes two and puts into variable `shiftedValue`

// unshift() is the same as push() but for the first (zero) spot in an array.
console.log(example.unshift(2)); // returns 4 because that's the length of array after adding
console.log(example.unshift('1')); // returns 5
console.log(example);

// You can change elements in an array
example[0] = 1; // changed from '1' the string to 1 the Number
console.log(example);

// You can also append items to an array using length property
example[example.length] = 6; // The reason this works is the index location is 5 which doesn't have a value yet so it appends one

// splice() method can be used to add AND delete items. You can even do it at the same time
example.splice(2, 0, 7, 8);
console.log(example); // [1, 2, 7, 8, 3, 4, 5, 6]

// below will return the deleted items if you output the result of it
example.splice(2, 2, 9, 10); // removed 7 and 8 because of the second parameter and adds in 9 and 10

console.log(example); // [1, 2, 9, 10, 3, 4, 5, 6]

// You can also use splice() to simply remove items wherever in an array
example.splice(2, 2) // removed 9 and 10 from list
console.log(example); // [1, 2, 3, 4, 5, 6]

let example2 = [7, 8, 9, 10];

// the concat() method can be used to join arrays
// concat takes more than one parameter so you could concatenate multiple arrays
let oneThroughTen = example.concat(example2);
console.log(oneThroughTen); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// slice() takes everything from index position 4 and onward and removes the items before that
// slice method creates a new array and does not remove items from the source array
let fiveThroughTen = oneThroughTen.slice(4);
console.log(fiveThroughTen); // [5, 6, 7, 8, 9, 10]

// You can also use slice to take a specific section of an array
let fiveThroughEight = fiveThroughTen.slice(0, 4); // REMEMBER: UP TO BUT NOT INCLUDING
console.log(fiveThroughEight); // [5, 6, 7, 8]



