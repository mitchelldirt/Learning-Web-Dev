function fibRecursive(n, arr) {
    if (arr.length === n) return arr;
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return fibRecursive(n, arr)
}

// console.log(fibRecursive(8, [0, 1]))

function fibIterative(n) {
    let arr = [0, 1]
    for (let i = 2; arr.length < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

// console.log(fibIterative(8)) // [0, 1, 1, 2, 3, 5, 8, 13]

function mergeSort(arr) {
    if (arr.length === 0) return "Please provide a non empty array!"
    if (arr.length === 1) return arr;


    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    // split left and right until they're 'sorted' then merge together. When merging on both sides are done
    // merge back into one sorted array.
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (leftArray, rightArray) => {
    const mergedCollection = [];

    //perform this until one array hits 0 elements
    while (leftArray.length > 0 && rightArray.length > 0) {
        // Which element of the array is lower
        const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;

        // Shift that item out of the array
        const mergeElement = arrayWithMin.shift();

        // Push it into the resulting array
        mergedCollection.push(mergeElement);
    }

    // Take what you got from the while loop [7, 8] and concat with the remaining array [10] <= JUST AN EXAMPLE
    return mergedCollection.concat(leftArray, rightArray);
}

console.log(mergeSort([10, 7, 8, 9, 1, 5]));