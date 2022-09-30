//Iterative version using for loop
function sumIterative(inputNumber) {
    let result = 0;
    for (let i = 0; i <= inputNumber; i++) {
        result += i
    }
    return result
}

//console.log(sumIterative(100))

//Recursive version of sum
function sumRecursive(n) {
    console.log(n)
if (n === 1) {
    return n;
}
return n + sumRecursive(n - 1)
}

// console.log(sumRecursive(9073))

//Arithmetic version of sum
function sumArithmetic(n) {
    return ((n * (n + 1)) / 2)
}

console.log(sumArithmetic(100000))