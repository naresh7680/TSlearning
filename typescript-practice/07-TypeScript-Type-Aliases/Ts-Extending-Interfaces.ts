// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new interface with the same properties as the original, 
// plus something new.

// Try creating a new interface and extending it like below
interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);

//   output
// { height: 5.9, width: 30, color: 'pink' }