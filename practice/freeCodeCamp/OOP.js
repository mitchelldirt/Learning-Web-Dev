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
    this.name = "dog";
    this.color = "black";
    this.numLegs = 4;
};

// How to create a new object from a constructor
let hound = new Dog();

// You can also give your constructor more flexible parameters as seen below
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
// You now put the name and color in as parameters when creating a Dog object.
let terrier = new Dog("Bob", "White");

// You can check if an object is an instanceof another object.
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(2);
myHouse instanceof House;

// You can use the below as an example of how to check the own properties of an instance object
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps)

// You can add prototypes to a constructor if the value will be constant among all instance objects
function Dog(name) {
    this.name = name;
    Dog.prototype.numLegs = 4; // Use the .prototype property to make the stated effect from above happen.
}

// You can check the constructor of an object with the below code
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

// Instead of appending prototype properties you can add them all onto a constructor at once like so
Dog.prototype = {
    // ALWAYS ADD CONSTRUCTOR PROPERTY TO ENSURE .constructor === constructor functions correctly.
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// You can check if an object inherits the prototype of a constructor 
Dog.prototype.isPrototypeOf(beagle);

/* This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck
 is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. 
 Therefore, any object can use the hasOwnProperty method. */
Object.prototype.isPrototypeOf(Dog.prototype);

// You shouldn't repeat yourself. If multiple object share a method then you should create a superType for this subTypes
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};
// Animal has method eat which can be inherited by other objects. Example lies up ahead.
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Below you can see Duck and Beagle inheriting the prototype of Animal
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// You can set the constructor and then have it inherit from a superTypes prototype after
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

// Any subtype for dog will now return a constructor of Animal to change this you can use the below code.
Dog.prototype.constructor = Dog;


// EXAMPLE OF ADDING A METHOD AFTER INHERITANCE
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
};

// You can override methods as seen below
Dog.prototype.bark = function () {
    console.log("WOOF!");
};

// You can use mixIns to add the same method to unrelated objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = function glide(obj) {
    obj.glide = function () {
        console.log("*Gliding*")
    }
}

glideMixin(bird);
glideMixin(boat);

// Sometimes you need to make properties in an object private. You can do so by making a property a variable like below.
function Bird() {
    // weight is now only able to be changed within the scope of this function as it isn't a global variable.
    let weight = 15;
    // getWeight can call on weight because it exists within the scope of the Bird constructor.
    this.getWeight = function () {
        return weight;
    }
}

// Below is an example of a immediately invoked function expression or IIFE.
(function () {
    console.log("A cozy nest is ready");
})();

// You can create a module using IIFE and mixIns as seen below:
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

// The advantage of this is being able to apply these mix ins to any object like so.
funModule.singMixin(object);