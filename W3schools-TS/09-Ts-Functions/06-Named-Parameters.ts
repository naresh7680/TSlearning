// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.

// Example
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

console.log(divide({dividend: 10, divisor: 2}));

// output
// 5