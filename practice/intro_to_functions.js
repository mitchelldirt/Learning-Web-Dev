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

// Example of a function without a set return value below:
function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
  }
  
  favoriteAnimal('Goat')

// JASVASCRIPT.INFO NOTES BELOW:

// Initial function example
function showMessage() {
    alert( 'Hello Everyone!' );
}

showMessage();

// Below shows local variable example
function showMessage2() {
    let message = 'Hello, I\'m Javascript!'; // local variable message, only applies to this function as it's local

    alert(message);
}

showMessage2(); // Will print 'Hello, I'm Javascript!'

alert(message); // Won't work because it is ot of the scope of the function.

// You can use global variables in functions but local variables stay inside the function... Example below:
let userName = 'John'

function showMessage3() {
    let userName = 'Bob'; // Usually would cause an error but this is a local variable

    let message = 'Hello, ' + userName; // Will be Bob
    alert(message);
}

// Function use the local variable not the global one because the local variable shadows the global variable
showMessage3(); // Bob

alert(userName); // John


// Below is an example of parameters in functions:
function showMessage4(from, text) {
    alert(from + ': ' + text);
}

showMessage4('Ann', 'Hello!');
showMessage4('Ann', 'What\'s up?');

// Here's another way to do the above function
// text has the default value 'No text given' if you don't anything
function showMessage5(from, text = 'No text given') {

    from = '*' + from + '*'; // make "from" look nicer
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage5(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  alert( from ); // Ann

  // You can do more complex default values such as anotherFunction() like shown below:
  function showMessage6(from, text = anotherFunction()) {
    // Another way to declare defauly values  
    if (text === undefined) {
          text ='Empty Message';
      }

      // ANOTHER way to do default values
      text = text || 'Empty Message';


    // anotherFunction() only executed if no text given
    // its result becomes the value of text
  }

// Return values,,, again
  function sum(a, b) {
      return a + b;
  }

  let result = sum(1, 2);
  alert(result); // Will output 3

  // YOU ARE AT THE RETURNING A VALUE SECTION OF THE JSINFO ARTICLE!
