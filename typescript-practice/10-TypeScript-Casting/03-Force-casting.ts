// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

// Example
let x2 = 'hello';
// console.log(((x2 as unknown) as number).length); // x is not actually a number so this will return undefined

// output
// prog.ts(2,40): error TS2339: Property 'length' does not exist on type 'number'.