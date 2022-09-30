// Question 1: Write a function called sumRange. 
// It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(n) {
    if (n === 1) return n;
    return n + sumRange(n - 1)
}


// Question 2: Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

/* Question 3: Write a function that returns the factorial of a number. 
As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, 
and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1. */

function factorial(n) {
    if (n === 1) return n;
    return n * factorial(n - 1)
}

// Question 4: Write a function called all which accepts an array and a callback and returns true 
// if every value in the array returns true when passed as parameter to the callback function
var allAreLessThanSeven = all([1, 2, 5], function (num) {
    return num < 7;
});

function all(array, callback) {
    // if copy exists it's equal to itself otherwise copy the inputted array
    const copy = array.slice();

    if (copy.length === 0) return true;

    if (callback(copy[0])) {
        copy.shift()
        return all(copy, callback)
    } else {
        return false;
    }

}

// Question 5: Write a function called productOfArray which takes in an 
// array of numbers and returns the product of them all

function productOfArray(array) {
    // If the array has nothing then it equals 1 
    if (array.length === 0) return 1;

    // (index 0 * index 0) array.length times
    return array.shift() * productOfArray(array)
}

const six = productOfArray([1, 2, 3]) // 6
const sixty = productOfArray([1, 2, 3, 10]) // 60

// Question 6: Write a function called contains that searches for a value in a nested object. 
// It returns true if the object contains that value.
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(obj, value) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], value);
        }

        if (obj[key] === value) {
            return true;
        }
    }
    return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false


// Question 7: Given a multi-dimensional integer array, return the total number of integers stored inside this array

// might need to take out the = 0???
function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);

// Question 8: Write a function that sums squares of numbers in list that may contain more lists



// ANSWERS

// Answer 1
// console.log(sumRange(5))

// Answer 2
/* console.log(
    power(2, 4),
    power(2, 3),
    power(2, 2),
    power(2, 1),
    power(2, 0)
)
*/

// Answer 3
// console.log(factorial(5))

// Answer 4
// console.log(allAreLessThanSeven)

// Answer 5
/*
console.log (six);
console.log(sixty);
*/

// Answer 6
// console.log(hasIt, doesntHaveIt);

// Answer 7
// console.log(seven)

//Answer 8
