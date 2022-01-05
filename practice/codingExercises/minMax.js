function minMax(arr) {
    let minNum;
    let maxNum;
    let currentNumber = 1000;
    let result = [];
    let lengthOfArray = arr.length;
// iterating through `arr` to find the minimum number.
    for (i = 1; i < lengthOfArray + 1; i++) {
        if (i < currentNumber) {
            minNum = i
        }
        currentNumber = i;
    }

    // Adding minimum number to spot 0 in the array.
result.push(minNum);
// iterating through `arr` to find the maximum number.
    for (i = 0; i < lengthOfArray + 1; i++) {
        if (i > currentNumber) {
            maxNum = i
        }
        currentNumber = i; 
    }

    // Adding maximum number to spot 1 in the array.
result.push(maxNum);

return result;
}