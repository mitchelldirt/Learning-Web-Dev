// Example of a written function:
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Math.random is used to get a random decimal value 0.0 to 1.0.
// The below is a function for getting a random whole number
function random(number) {
    return Math.floor(Math.random() * number);
}

// You can use anonymous functions but typically you should just stick with the above.
// anonymous functions don't need to be in variables and are typically used for event handlers.
let anonFunction = function () {
    console.log(1 + 7);
}

//Some functions take parameters and some don't. some are optional like below.
let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
// returns 'I love chocolate frogs'
let madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'

//BE CAREFUL ABOUT FUNCTION SCOPE, REFERENCE BACK TO MDN DOCS IF YOU NEED TO!

// Section on return values below
// Example of function with return value below
function random(number) {
    return Math.floor(Math.random() * number);
}


