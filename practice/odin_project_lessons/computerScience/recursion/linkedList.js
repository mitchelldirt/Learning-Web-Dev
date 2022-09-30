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

function linkedListRecusion(list) {
    console.log(list.value)

    if (list.next) {
        linkedListRecusion(list.next)
    }
}

function linkedListIterative(list) {
    while (list) {
        console.log(list.value)
        list = list.next
    }
}

console.log(linkedListRecusion(list))
console.log(linkedListIterative(list))