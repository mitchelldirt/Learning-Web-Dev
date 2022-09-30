let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function reverseLinkedListIterative(list) {
    let array = [];
    while (list) {
        array.push(list.value)
        list = list.next
    }
    for (let item of array.reverse()) {
        console.log(item)
    }
}

function reverseLinkedListRecursion(list) {

    if (list.next) {
        reverseLinkedListRecursion(list.next)
    }
    console.log(list.value)
}

console.log(reverseLinkedListIterative(list))
console.log(reverseLinkedListRecursion(list))