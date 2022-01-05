// There aren't integers and floats in JS only the type `number`.
let myInt = 5;
let myFloat = 5.5;
myInt;
myFloat;

// The below function will take the initial decimal and simplify it down to (2) decimal points.
let lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

// Adding a 3 to the string `74` will just add it to the string. *SEE NEXT EXAMPLE*
let myNumber = '74';
myNumber = myNumber + 3;
console.log(myNumber);

// You can check the type of your variable using the below.
console.log(typeof (myNumber));

// The below example shows changing the string `myNumber` to a variable, adds 3 to it, and then checks it type.
console.log(typeof (Number(myNumber) + 3));

// Below are some simple examples of code utilizing the type Number.
console.log(10 + 7);
console.log(9 * 8);

// Module will return 0 because there's nothing remaining after your do 60 / 3.
console.log(60 % 3);
let num1 = 10;
let num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;
5 + 10 * 3;
num2 % 9 * num1;
num2 + num1 / 8 + 2;

// Increment ++ and Decrement -- operator examples shown below:

// You cannot use ++ or -- on a number alone as they are used to modify a variable. 
//4++;
let num3 = 6;
num3++;
console.log(num3);
// example of -- below.
num3--;
console.log(num3);

//If you put the ++ beforehand it will show up immediately but if you put it after then it won't. EXAMPLE BELOW:
let thing = 3;
console.log(++thing);

// as talked about above, thing2++ will return the value of `thing2` before incrementing.
let thing2 = 3;
console.log(thing2++);

// You can use += and other operator types like this in JS just like in Python.
let num4 = 10;
num4 += 5;
console.log(num4);

// Comparison operators shown below:

// === is used for strict equality checking
let var1 = 5;
let var2 = 5;
let var3 = 6;

// `var1` and `var2` are the exact same therefore it will return boolean value True.
console.log(var1 === var2);

// `var2` and `var3` are not the same therefore it will return boolean value False.
console.log(var1 === var3);

// !== is used for strict NON-equality.
// `var1` and `var3` are not the same so it will return boolean value True.
console.log(var1 !== var3);

// `var1` and `var2` are the same and therefore will return boolean value False.
console.log(var1 !== var2);

// adding a negative to a variable containing a number before hand makes it negative.
let x = 5;
console.log(-x);

/* Earlier you were shown if you added a number and a string it would 
convert the number to a string and add it to the original string. */
// for division and subtraction it will convert the string value to a number value instead.
let i = 3;
let stringi = "3";
console.log(i + stringi); // 33 because number three is tacked onto the string three.
console.log(i - stringi); // 0 because `stringi` is converted to a number.
console.log(i / stringi); // 1 because `stringi` is converted to a number.

// unary operations have higher precedence than binary ones. +a will go because a - b.

//example of why you would use commas in code (it's not super readable so think before using):
let a;
let b;
let c;
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    //stuff in here
}

// spaces, \t, \n all are 0 in number form because they're all spaces.