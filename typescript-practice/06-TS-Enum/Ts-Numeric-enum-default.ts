// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

// Numeric Enums - Default is 0 and add 1 to each additional value
enum CardinalDirections {
  North,  // 0
  East,   // 1
  South,  // 2
  West    // 3
};
            
let currentDirection = CardinalDirections.East;

// North is the first value so it logs '0'
console.log(CardinalDirections);
console.log(currentDirection);

// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North'; 
// Error: "North" is not assignable to type 'CardinalDirections'.

//output
// {
//   '0': 'North',
//   '1': 'East',
//   '2': 'South',
//   '3': 'West',
//   North: 0,
//   East: 1,
//   South: 2,
//   West: 3
// }
// 1