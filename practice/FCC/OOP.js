// Create an object
let dog = {
    name: "dog",
    numLegs: 4,
};

// Dot notation can be used to reference objects properties
console.log(dog.name + " " + dog.numLegs)
// Bracket notation can be used as well --Make sure you make the property a string within the brackets--
console.log(dog["name"] + " " + dog["numLegs"]);

// Add a new property --In this case a method-- to the object dog
dog["sayLegs"] = function () { return `This dog has ${dog["numLegs"]} legs.` };

// Instead of using `dog` in a method you should use `this` for more reusability.
dog["sayLegs"] = function () { return `This dog has ${this["numLegs"]} legs.` };

// Constructors can be used as templates to create other objects. --Be sure to capitalize your constructor name--
function Dog() {
    this.name = "dog",
    this.color = "black",
    this.numLegs = 4
};