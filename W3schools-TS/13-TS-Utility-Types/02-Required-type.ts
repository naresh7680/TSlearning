// Required changes all the properties in an object to be required.

interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
              
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };
  
  console.log(myCar);

//   output
// { make: 'Ford', model: 'Focus', mileage: 12000 }

// Error output If we con't initialize one Variable
// prog.ts(7,5): error TS2741: Property 'mileage' is missing in type '{ make: string; model: string; }' 
// but required in type 'Required<Car>'.