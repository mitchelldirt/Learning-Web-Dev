// Below is how to declare an empty object.
let example = new Object(); // This is the object constructor syntax.
let example2 = {}; // This is the object literal syntax

// How to declare an actual object.
// In this example there are two properties (name & age) and two values (string `Mitchell` and Number `21`).
let user = {
    name: 'Mitchell',
    age: 21
};

// You can access the property values at any time using dot notation shown below.
console.log(user.name); // Mitchell
console.log(user.age); // 21

// You can add more properties to an object.
user.isAdmin = true;
console.log(user.isAdmin); // true

// You can also remove properties from an object.
delete user.isAdmin;
console.log(user.isAdmin); // Now outputs undefined because isAdmin isn't a property of user.

// When using multi word properties you need to use quotes around the property.
// You cannot use dot notation for this but you can use bracket notation.
user["likes birds"] = true;
console.log(user["likes birds"]); // true
delete user["likes birds"];
console.log(user["likes birds"]); // undefined

// Another way to do the above is using a variable
let key = 'believes birds are real';
user[key] = false;
console.log(user['believes birds are real']); // The property name is the value of key not the name of the variable key.

key = prompt('Does the user believe in birds?', 'believes birds are real');
alert(user[key]); // will alert false if the user enters believes birds are real into the prompt
alert(user.key) // does not work

// Below is computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

// The above is the same as below. Use the above syntax as it is cleaner.
fruit = prompt("Which fruit to buy?", "apple");
bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// complex expression can be used inside of the square brackets
fruit = 'apple';
bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};


// This is how you could make multiple objects using the same variables.
function makeUser(name, age, height) {
    return {
        name: name,
        age: age,
        height: height,
        // ...other properties
    };
}

user = makeUser("Mitchell", 21, '6FT 0IN');
alert(user.name); // Mitchell

// You can use shorthand properties instead with no values.
function makeUser2(name, age) {
    return {
        name, // same as name: name
        age,  // same as age: age
        height,
        // ...
    };
}

// Variables cannot typically be named: for, let, or return. But in objects they can.
let obj = {
    for: 1,
    let: 2,
    return: 3,
}

console.log(obj.for + obj.let + obj.return); // outputs 6

let obj2 = {
    0: 1
}

// Both return the same value because a number becomes a string when used as a property.
console.log(obj2[0]); // 1
console.log(obj2['0']); // 1 

// There is a caveat to the above that you need to be aware of.
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

let me = {
    name: 'Mitchell',
    age: 21,
};

console.log('name' in me); // true
console.log('wearsGlasses' in me); // false