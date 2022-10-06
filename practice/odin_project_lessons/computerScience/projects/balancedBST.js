class Node {
    data = null
    leftChild = null
    rightChild = null

    constructor(data) {
        this.data = data;
    }
}

class Tree {
    root = null

    constructor(array) {
        this.array = array;
    }

    cleanArray() {
        this.array.sort((a, b) => {
            return a - b
        })
        // remove duplicates
        return this.array.filter((item,
            index) => this.array.indexOf(item) === index);
    }

    buildTree() {
        //TODO: write function haha
    }
}

const pine = new Tree([5, 6, 6, 9, 10, 3, 9, 10, 1]);

console.log(pine.sortArray())