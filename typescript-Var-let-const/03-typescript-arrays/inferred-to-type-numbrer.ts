const numbers = [1, 2, 3]; // inferred to type number[]

numbers.push(4); // no error

// comment line below out to see the successful assignment 
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(numbers);

let head : number = numbers[0]; // no error

console.log(head);