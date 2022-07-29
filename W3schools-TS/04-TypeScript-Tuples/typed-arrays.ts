// Typed Arrays
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);

// Readonly Tuple
// define our tuple
// let ourTuple: [number, boolean, string];
// initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);

// Named Tuples
// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph);

// Destructuring Tuples
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;