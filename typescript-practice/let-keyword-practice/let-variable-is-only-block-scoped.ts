// let keyword in JavaScript: The let keyword is an improved version of the var keyword. 
let a = 10;
    function f() {
        let b = 9
        console.log(b);
        console.log(a);
    }
    f();


    // output
    // PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> tsc let-variable-is-only-block-scoped.ts
    // PS D:\TSlearning\typescript-Var-let-const\let-keyword-practice> node let-variable-is-only-block-scoped.ts
    // 9
    // 10