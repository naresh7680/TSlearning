console.log(a);
let num = 10;

// output
// PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> tsc let-variable-before-the-declaration.ts
// let-variable-before-the-declaration.ts:1:13 - error TS2304: Cannot find name 'a'.
// 1 console.log(a);
//               ~


// Found 1 error in let-variable-before-the-declaration.ts:1

// PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> node let-variable-before-the-declaration.ts
// D:\TSlearning\typescript-Var-let-const\let-keyword-practice\let-variable-before-the-declaration.ts:1
// (function (exports, require, module, __filename, __dirname) { console.log(a);
//                                                                           ^
// ReferenceError: a is not defined