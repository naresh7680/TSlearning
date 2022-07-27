const stda = {
    prop1: 10,
    prop2: 9
}
 
// It is allowed
stda.prop1 = 3

// It is not allowed
stda = {
    stdb: 10,
    prop2: 9
}

// output
// uncaught SyntaxError:Unexpected identifier