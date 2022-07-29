
// Union types are used when a value can be more than a single type.

// Such as when a property would be string or number.

// Union | (OR)
// Using the '|' we are saying our parameter is a string or number:

function printStatusCode(code: string | number) {
    console.log(`My status code is : ${code}.`)
  }
  
  printStatusCode(404);
  printStatusCode('404');

//   output
// My status code is : 404.
// My status code is : 404.


// function printStatusCode1(code: string | number) {
//     console.log(`My status code is : ${code.toUpperCase()}.`) 
//   }

//   output 
// // error: Property 'toUpperCase' does not exist on type 'string | number'. 
// Property 'toUpperCase' does not exist on type 'number'