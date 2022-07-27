let av = 10
 
    // It is not allowed
    let av = 10
 
    // It is allowed
    av = 10
console.log(av);


// output
// PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> tsc let-cannot-re-declare-update-it.ts
// let-cannot-re-declare-update-it.ts:1:5 - error TS2451: Cannot redeclare block-scoped variable 'a'.

// 1 let a = 10
//       ~

// let-cannot-re-declare-update-it.ts:4:9 - error TS2451: Cannot redeclare block-scoped variable 'a'.
// 4     let a = 10
//           ~


// Found 2 errors in the same file, starting at: let-cannot-re-declare-update-it.ts:1

// PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> node let-cannot-re-declare-update-it.ts
// D:\TSlearning\typescript-Var-let-const\let-keyword-practice\let-cannot-re-declare-update-it.ts:4
//     let a = 10
//         ^

// SyntaxError: Identifier 'a' has already been declared