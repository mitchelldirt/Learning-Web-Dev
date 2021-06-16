// factorial
function factorialize(num) {
    let result = 1;
    for (let i = 1; i < num + 1; i++) {
        result *= i;
    }
    return result;
}

factorialize(5);

//Find the longest word in a string
function findLongestWordLength(str) {
    let strArray = str.split(" ");
    let characterCount = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > characterCount) {
            characterCount = strArray[i].length;
        } else {
            continue;
        }
    }
    return characterCount;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Largest Numbers in Arrays
function largestOfFour(arr) {
    let finalArray = [];
    let largestNumber = -100;
    for (let i = 0; i < 4; i++) {
        let currentArray = arr[i];
        largestNumber = -100;
        for (let i = 0; i < 4; i++) {
            if (currentArray[i] > largestNumber) {
                largestNumber = currentArray[i];
            } else {
                continue;
            }
        }
        finalArray.push(largestNumber);
    }
    return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);