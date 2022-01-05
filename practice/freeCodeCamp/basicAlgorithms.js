// factorial
function factorialize(num) {
    let result = 1;
    for (let i = 1; i < num + 1; i++) {
        result *= i;
    }
    return result;
}

factorialize(5); // 120

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

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6

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

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [5, 27, 39, 1001]

// Confirm the ending
function confirmEnding(str, target) {
    let amountToIndex = target.length * -1;
    let endOfString = str.slice(amountToIndex);
    console.log(endOfString);
    if (endOfString === target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n"); // n

// Repeat a string
function repeatStringNumTimes(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}

repeatStringNumTimes("abc", 3);

// Truncate a string
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num) + "..."
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Does element pass the function?
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === false) {
            continue;
        } else {
            return arr[i];
        }
    }
}

findElement([1, 2, 3, 4], num => num % 2 === 0); // 2

// Is it a bool?
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    } else {
        return false;
    }
}

booWho(null);

// Uppercase each work in a string
function titleCase(str) {
    let lowerCaseStr = str.toLowerCase();
    let strArray = lowerCaseStr.split(" ");
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    }
    return strArray.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let result = [...arr2]
    for (let i = 0; i < arr1.length; i++) {
        result.splice(n, 0, arr1[i])
        n += 1;
    }
    return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Are there false values in the array
function bouncer(arr) {
    let newArray = [...arr];
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = Boolean(newArray[i]);
    }
    let amountToIndex = arr.length
    for (let i = 0; i < amountToIndex; i++) {
        if (newArray[i] === false) {
            arr.splice(i, 1);
            newArray.splice(i, 1);
            i--;
        } else {
            continue;
        }
    }
    return arr;
}

// Where does the value belong in an array
function getIndexToIns(arr, num) {
    arr.push(num);
    console.log(arr);
    arr.sort(function (a, b) { return a - b });
    console.log(arr);
    let result = arr.indexOf(num);
    return result;
}

getIndexToIns([3, 10, 5], 3);

// String contains string
function mutation(arr) {
    let firstWord = arr[0].toLowerCase();
    let secondWordSplit = arr[1].toLowerCase().split("");
    for (let i = 0; i < secondWordSplit.length; i++) {
        if (firstWord.includes(secondWordSplit[i])) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);

// Split array into arrays
function chunkArrayInGroups(arr, size) {
    let count = 0;
    let arrayOfArrays = [];
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (count === size) {
            arrayOfArrays.push(newArray);
            newArray = [];
            count = 0;
            i--;
        } else if (count < size) {
            newArray.push(arr[i]);
            count += 1;
        }
    }
    arrayOfArrays.push(newArray);
    return arrayOfArrays;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);