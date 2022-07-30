type Primitive = string | number | boolean;

const value1: Exclude<Primitive, string> = true;
// a string cannot be used here since Exclude removed it from the type.

console.log(typeof value1);

// output
// boolean