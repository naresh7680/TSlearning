// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let x: unknown = 'hello';

console.log('String length : ', (x as string).length);

// output
// String length : 5