// Below will show factory functions and how they can be used instead of constructors.
const dogFactory = (name, age, color) => {
    const bark = () => console.log("woof");
    return { name, age, color, bark };
};

const dutch = dogFactory("dutch", 2);
console.log(dutch.age);
dutch.bark();

// This is a good way to console.log multiple variables
const name = "Mitchell";
const color = "Green";
const number = "2";
const food = "Mac & Cheese";
console.log({ name, color, number, food });


// Creates a counter
const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

//assign counterCreator to the variable counter so that counter can access locally scoped variable count.
const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3

/* The example below shows how private functions can be good to use. If you didn't use them you would be able to call jimmy.die or jimmy.health -= 1000. This would make the code harder to refactor and more spaghetti like. */
const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;
    const _die = () => {
        // uh oh
    };
    const _damage = x => {
        health -= x;
        if (health <= 0) {
            _die();
        }
    };
    const attack = enemy => {
        if (level < enemy.getLevel()) {
            _damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if (level >= enemy.getLevel()) {
            enemy._damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    };
    return { attack, _damage, getLevel, getName }
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);


// How to inherit with factories.

// Creating person factory
const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return { sayName }
}

const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax! 
    const { sayName } = Person(name) // inheriting from Person
    const doSomethingNerdy = () => console.log('nerd stuff')
    return { sayName, doSomethingNerdy }
}

const jeff = Nerd('jeff')

jeff.sayName() //my name is jeff
jeff.doSomethingNerdy() // nerd stuff


// This is an example of a module. It's like a factory function but instead it's wrapped in an IIFE.
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div,
    };
})();

console.log(calculator.add(3, 5)) // 8
console.log(calculator.sub(6, 2)) // 4
console.log(calculator.mul(14, 5534)) // 77476