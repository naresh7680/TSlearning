enum CardinalDirections {
  North1 = 10,
  East1,
  South1,
  West1
};

// logs 10 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North1);

// logs 13 as it continued on from the initial '10' value
console.log(CardinalDirections.West1);

// output
// 10
// 13