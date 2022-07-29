// Return Type
// The type of the value returned by the function can be explicitly defined.

// Example
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());

// output
// 1648464745471