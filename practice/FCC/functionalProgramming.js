// Below shows a callback in the getTea function using prepareGreen or prepareBlack Tea.
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// function programming means all dependencies for that function should be within the scope of the function
let fixedValue = 4;

function incrementor(value) {
  value = fixedValue;
}

// BELOW IS AN EXAMPLE OF MAP BASED OFF OF AN ARRAY OF MOVIE OBJECTS!
let ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}))

// This is a copy of the map method
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [...s];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] *= 2;
  }
  return newArray;
};

// Here is an example or how you can map an array and the filter it
var filteredList = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
})).filter(movie => movie["rating"] >= 8.0);

// You can use concat to put array items into another array. Using push would put the array inside of the array
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

// You can use filter, map, and reduce to find exactly what you need from an array
function getRating(watchList) {
  // First you would filter by director name
  var averageRating = watchList.filter(person => person["Director"] === "Christopher Nolan")
    // Then you grab only the ratings
    .map(film => Number(film["imdbRating"]))
    // Then you sum the ratings and divide by the length of the films created by directors name
    .reduce((sumOfRatings, rating) => sumOfRatings + rating, 0) /
    watchList.filter(film => film.Director === "Christopher Nolan").length;
  return averageRating;
}
console.log(getRating(watchList));

// Take a list of the square root of values and return the value 
const squareList = arr => {
  let newArr = arr.filter(item => item > 0 && item % 1 === 0).map(item => item *= item);
  return newArr;
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// You can use concat to pass by value if you give the original array an empty array and put it within a variable
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArray = arr.concat([]);
  newArray.sort(function (a, b) { return a - b });
  console.log(newArray);
  return newArray;


}
nonMutatingSort(globalArray);

// Below you split by non word characters. This uses a REGEX
function splitify(str) {
  let newStr = str.split(/\W/);
  return newStr;
}
splitify("Hello World,I-am code");

// Make a urlSlug using REGEX. The REGEX will split on any whitespace character. Basically deletes all separators.
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-")
}

// Functions that uses the `every` method to check if all values in an array are positive
function checkPositive(arr) {
  let newArr = [...arr];
  return newArr.every(function (currentValue) {
    return currentValue > 0;
  });


}
checkPositive([1, 2, 3, -4, 5]);

// Function that uses the `some` method to check if ANY values in an array are positive
function checkPositive(arr) {
  return arr.some(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);

// Below is a curried function
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    }
  }
}

add(5)(15)(30); // 50