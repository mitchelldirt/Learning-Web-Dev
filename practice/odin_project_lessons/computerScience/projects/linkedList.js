class LinkedList {
    append(node) {
        if (Object.entries(this).length === 0) {
            Object.assign(this, node)
        }
        this.nextNode = node
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
        let currentNode = this.nextNode;
        for (let i = 0; i == 0;) {
            if (!currentNode.nextNode) {
                return currentNode;
                i = 1
            }
            currentNode = currentNode.nextNode
        }
    }

    at(index) {
        
    }

    pop() {

    }

    contains(value) {

    }

    find(value) {

    }

    toString() {

    }
}

class Node {
    value = null;
    nextNode = null;

    constructor(value) {
        this.value = value;
    }
}

let list = new LinkedList();

let superNode = new Node(1)
list.append(superNode)

let nodeTwo = new Node(2);
list.append(nodeTwo)

let nodeThree = new Node(3);
list.prepend(nodeThree);


let nodeFour = new Node(4);
list.prepend(nodeFour);


console.log(list.head())