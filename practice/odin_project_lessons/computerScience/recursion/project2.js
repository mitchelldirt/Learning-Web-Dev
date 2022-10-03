function mergeSort(arr) {
    if (arr.length === 0) return 'Need input'
    if (arr.length === 1) return arr;

let midPoint = Math.floor(arr.length / 2);
let leftArr = arr.slice(0, midPoint);
let rightArr = arr.slice(midPoint);

return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
let output = [];

while (leftArr.length > 0 && rightArr.length > 0) {
    // which first element in each array is lower - shift the first element of that array
    let lowerElement = leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift();
    output.push(lowerElement);
}

// Return sorted output and concatenate the remaining elements.
return output.concat(leftArr, rightArr);
}

console.log(mergeSort([10, 7, 8, 9, 1, 5]));