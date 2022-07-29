// Optional Parameters
// By default TypeScript will assume all parameters are required, 
// but they can be explicitly marked as optional.

// Example
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(add(2,5))

// output
// 7