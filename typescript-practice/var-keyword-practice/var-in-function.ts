function f1() {
 
    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f1();

// A cannot be accessible
// outside of function
console.log(a);

// output
// 10
// D:\TSlearning\typescript-Var-let-const\var-in-function.ts:12
// console.log(a);
//             ^

// ReferenceError: a is not defined