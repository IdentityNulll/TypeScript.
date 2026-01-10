// what are generics ?
// generics are things that help functions for using any type 
// here is an example:

// function identity(value: any) {
    // return value // here it is too risky to do this
// }

// so we can solve this problem by:

function identity <T>(value:T):T {
    return value
}

console.log(identity("hello"))

// with arrays :
function first <T>(arr : T[]) : T | undefined {
    return arr[0]
}


