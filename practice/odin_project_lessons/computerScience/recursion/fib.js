//Regular Recursion ?
function fib(n) {
    if (n <= 1) return n;
    return n * fib(n - 1);
}

console.time('1')
fib(77)
console.timeEnd('1')

// Dynamic Bottom Up
function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.time('2')
fib2(77)
console.timeEnd('2')