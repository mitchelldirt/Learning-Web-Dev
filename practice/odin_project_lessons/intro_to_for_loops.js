// How to write a loop below

let numberOfCats = 0;
for (i = 0; i < 5; i++) {
    numberOfCats += 4;
}
console.log(numberOfCats); // 20 because 5 times 4 = 20

// This won't run unless you have an HTML doc to run it on *bleh*
const dogs = ['Molly', 'Leo', 'Dojo', 'Gravy', 'Clover'];
let info = 'My dogs are called ';
const paragraph = document.querySelector('p');

for (let i = 0; i < dogs.length; i++) {
    info += dogs[i] + ', ';
}

paragraph.textContent = info;
alert(paragraph);

// On the above you'll be left with a comma at the end :( the fix for that is below
for (let i = 0; i < dogs.length; i++) {
    if (i === dogs.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
}

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    // searchName is what the user inputs
    let searchName = input.value.toLowerCase();
    // we start with the value being empty
    input.value = '';
    // focus makes the box blue to notify user to input their name
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        // split the contact at index location i 
        let splitContact = contacts[i].split(':');
        // if the name equals the searched name then it will return the phone number (index[1])
        if (splitContact[0].toLowerCase() === searchName) {
            // the code below would return Chris's number is 2232322
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        } else if (i === contacts.length - 1) {
            para.textContent = 'Contact not found.';
        }
    }
});


// You could use the html from the intro_to_loops to display this
let num = input.value;

for (let i = 1; i <= num; i++) {
    // i will increment until it reaches `num`  
    let sqRoot = Math.sqrt(i);
    /* if the rounded down square root 
    isn't equal to `num` square root just skip it */
    if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }
    // concatenates current i value plus a space at the end
    para.textContent += i + ' ';
}


// next up is the while loop
let i = 0;

while (i < dogs.length) {
    if (i === dogs.length - 1) {
        info += 'and ' + dogs[i] + '.'
    } else {
        info += dogs[i] + ', '
    }

    // You put this at the end unlike a for loop
    i++;
}

// This is how you do the same thing as above, but with a do-while loop
// literally just changes the order 
do {
    if (i === dogs.length - 1) {
        info += 'and ' + dogs[i] + '.'
    } else {
        info += dogs[i] + ', ';
    }

    i++;
} while (i < cats.length)

// BELOW IS ACTIVE LEARNING EXERCISES FROM MDN DOCS
// Again this is supposed to be ran concurrently with an html document
let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');
    if (i === 0) {
        output.appendChild(para);
        para.textContent = 'Blast off!';
    } else {
        output.appendChild(para);
        para.textContent = `Countdown ${i}`;
    }
    i--;
}

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += `${people[i]}, `;
    } else {
        admitted.textContent += people[i] + ', '
    }
}

// Below slices the comma and space at the end off then replaces with a period
refused.textContent = refused.textContent.slice(0, refused.textContent.length - 2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2) + '.';