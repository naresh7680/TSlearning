// Partial changes all the properties in an object to be optional.

interface Point {
    x: number;
    y: number;
  }
              
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;
  // pointPart.y = 10;
  
  console.log(pointPart);

  // output
  // { x: 10 }