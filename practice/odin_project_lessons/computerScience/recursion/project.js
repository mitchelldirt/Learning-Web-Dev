
function fibRecursive(n, arr) {
    if (arr.length === n) return arr;
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return fibRecursive(n, arr)
}

console.log(fibRecursive(8, [0, 1]))

function fibIterative(n) {
    let arr = [0, 1]
    for (let i = 2; arr.length < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

console.log(fibIterative(8)) // [0, 1, 1, 2, 3, 5, 8, 13]