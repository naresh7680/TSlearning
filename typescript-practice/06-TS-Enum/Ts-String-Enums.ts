// Enums can also contain strings. This is more common than numeric enums, 
// because of their readability and intent.

enum CardinalDirections {
    North2 = 'North',
    East2 = "East",
    South2 = "South",
    West2 = "West"
  };
  
  // logs "North"
  console.log(CardinalDirections.North2);
  
  // logs "West"
  console.log(CardinalDirections.West2);

//   output
// North
// West