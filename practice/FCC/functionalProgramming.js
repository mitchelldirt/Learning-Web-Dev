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

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// function programming means all dependencies for that function should be within the scope of the function
let fixedValue = 4;

function incrementor (value) {
    value = fixedValue;
}

// BELOW IS AN EXAMPLE OF MAP BASED OFF OF AN ARRAY OF MOVIE OBJECTS!
let ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}))

