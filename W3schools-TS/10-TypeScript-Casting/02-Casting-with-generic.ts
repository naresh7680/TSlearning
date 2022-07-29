// Casting with <>
// Using <> works the same as casting with as.

let x1: unknown = 'hello';

console.log((<string>x1).length);