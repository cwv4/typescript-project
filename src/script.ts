let x = 123;
let y: string;
let z: boolean;
let a: Date;

type Description = string;

interface Tree {
    height: number;
    age: number;
    description?: Description;
};

interface PalmTree extends Tree {
    numPalmLeaves: number;
};

let myTree: Tree = {
    height: 10,
    age: 5,
    description: "Small oak tree"
};

let myPalm: PalmTree = {
    height: 15,
    age: 7,
    numPalmLeaves: 70
};

console.log("My regular tree is " + myTree.height + " feet tall and " + myTree.age + " years old.");
console.log("My palm tree is " + myPalm.height + " feet tall and " + myPalm.age + " years old and it has " + myPalm.numPalmLeaves + " leaves.")

