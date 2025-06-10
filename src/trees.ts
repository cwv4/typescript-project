let x = 123;
let y: string;
let z: boolean;
let a: Date;

type Description = string;

enum TreeType {
    Oak = "oak",
    Birch = "birch",
    Palm = "palm"
};

interface Tree {
    height: number;
    age: number;
    description?: Description;
    type: TreeType;
};

interface PalmTree extends Tree {
    numPalmLeaves: number;
};

let myTree: Tree = {
    height: 10,
    age: 5,
    description: "Small oak tree",
    type: TreeType.Oak
};

let myPalm: PalmTree = {
    height: 15,
    age: 4,
    numPalmLeaves: 70,
    type: TreeType.Palm
};

console.log("My regular tree is an " + myTree.type + " tree. It is " + myTree.height + " feet tall and " + myTree.age + " years old.");
console.log("My palm tree is a " + myPalm.type + " tree. It is " + myPalm.height + " feet tall and " + myPalm.age + " years old and it has " + myPalm.numPalmLeaves + " leaves.")



function cloneTree(tree: Tree): Tree {
    return Object.apply({}, tree);
}


function findMaxForField<T>(array: T[], fieldName: keyof T): T {
    return array.reduce((max, x) => x[fieldName] > max[fieldName] ? x : max);
}

let treeArray = [myTree, myPalm];

console.log(findMaxForField(treeArray, "height"));
console.log(findMaxForField(treeArray, "age"))







