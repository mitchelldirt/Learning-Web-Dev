class LinkedList {

    append(node) {
        if (Object.entries(this).length === 0) {
            Object.assign(this, node)
            return;
        }
        let currentNode = this;
        while (currentNode) {
            if (!currentNode.nextNode) {
                currentNode.nextNode = node
                return;
            }
            currentNode = currentNode.nextNode
        }
        return 'Node not found';
    }

    prepend(node) {
        let currentObject = { ...this };
        Object.assign(this, {});
        Object.assign(this, node);
        this.nextNode = currentObject
    }

    size() {
        return Object.entries(this).length;
    }

    head() {
        return this
    }

    tail() {
        let currentNode = this;
        while (currentNode) {
            if (!currentNode.nextNode) {
                return JSON.stringify(currentNode);
                console.log('AJJHH')
            }
            currentNode = currentNode.nextNode
        }
    }

    at(index) {
        let currentNode = this
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return currentNode;
            }
            currentNode = currentNode.nextNode
            if (!currentNode) {
                return 'Index is invalid'
            }
        }

    }

    pop() {
        let currentNode = this.nextNode;
        let previousNode;

        if (Object.entries(this).length <= 1) {
            Object.assign(this, {})
        }

        for (let i = 0; i == 0;) {
            if (!currentNode.nextNode) {
                previousNode.nextNode = null;
                return;
            }
            previousNode = currentNode
            currentNode = currentNode.nextNode
        }
    }

    contains(value) {
        let currentNode = this;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode
        }
        return false;
    }

    find(value) {
        let currentNode = this;
        let i = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return i;
            }
            currentNode = currentNode.nextNode
            i++;
        }
        return 'Node not found';
    }

    toString() {
        let currentNode = this;
        let stringLinkedList = []
        while (currentNode) {
            stringLinkedList.push(`(${currentNode.value})`)
            currentNode = currentNode.nextNode
        }
        return stringLinkedList.join('->')
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(new Node(value))
            return;
        }
        let currentNode = this;
        let futureNodes;
        let i = 1;



        while (currentNode) {
            if (i === index) {
                futureNodes = { ...currentNode.nextNode };
                currentNode.nextNode = new Node(value, futureNodes);
                return this;
            }
            currentNode = currentNode.nextNode;
            i++;
        }
        return this.append(new Node(value))
    }

    removeAt(index) {
        // Make the index's nextNode property = the nextNode.nextNode
        let i = 1;
        let currentNode = this;

        while (currentNode) {
            if (i === index) {
                currentNode.nextNode = currentNode.nextNode.nextNode;
                return this;
            }
            currentNode = currentNode.nextNode;
            i++;
        }
        return 'Index position not available, use pop if you want to remove the last element of the list'
    }
}

class Node {
    value = null;
    nextNode = null;

    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new LinkedList();
console.log(`New Linked List: ${list}`)

let superNode = new Node(1)
list.append(superNode)
console.log(`Append: ${list}`)

let nodeTwo = new Node(2);
list.prepend(nodeTwo)
console.log(`Prepend: ${list}`)

console.log(`Tail: ${list.tail()}`);
console.log(`Head: ${list.head()}`);
console.log(`Size: ${list.size()}`);

list.insertAt(7, 1);
console.log(`Insert value 7 at index 1: ${list}`);

list.insertAt(9, 1);
console.log(`Insert value 9 at index 1: ${list}`);

list.pop();
console.log(`Pop the last item off the list ${list}`);

list.removeAt(1)
console.log(`Remove index 1 in the list: ${list}`);

console.log(`Find index of value 7: ${list.find(7)}`);

console.log(`List contains the value 7: ${list.contains(7)}`);

console.log('String representation of list:')
console.log(list.toString());

