function collatz(n) {
    console.log(n)
    if (n === 1) 
        return n
    return n % 2 == 0 ? collatz(n / 2) : collatz((3 * n) + 1)
}
console.log(collatz(8))