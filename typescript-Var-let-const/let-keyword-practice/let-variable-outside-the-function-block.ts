let a1 = 10;
    function f2() {
        if (true) {
            let b1 = 9
 
            // It prints 9
            console.log(b1);
        }
 
        // It gives error as it
        // defined in if block
        console.log(b1);
    }
    f2()
 
    // It prints 10
    console.log(a1);


// PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> tsc let-variable-outside-the-function-block.ts

// PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> node let-variable-outside-the-function-block.ts
// 9
// D:\TSlearning\typescript-Var-let-const\let-keyword-practice\let-variable-outside-the-function-block.ts:12
//         console.log(b);
//                     ^
// ReferenceError: b is not defined