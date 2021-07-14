// Below will show factory functions and how they can be used instead of constructors.
const dogFactory = (name, age, color) => {
    const bark = () => console.log("woof");
    return { name, age, color, bark };
};

const dutch = dogFactory("dutch", 2);
console.log(dutch.age);
dutch.bark();