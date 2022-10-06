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
        this.array = cleanArray(array);
    }

    cleanArray() {
        this.array.sort((a, b) => {
            return a - b
        })
        // remove duplicates
        return this.array.filter((item,
            index) => this.array.indexOf(item) === index);
    }

    buildTree(array) {
        //TODO: write function haha

        // STEP 1: Set the root of the tree (middle of the array)

        // STEP 2: Set the items to the left of the root as left child and right of the root as right child

        // STEP 3: Recursively do the same for the left and right half

        // STEP 4: base case = start > end

        // use article linked from odin project for reference
    }
}

const pine = new Tree([5, 6, 6, 9, 10, 3, 9, 10, 1]);

console.log(pine.sortArray())