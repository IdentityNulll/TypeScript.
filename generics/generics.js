// what are generics ?
// generics are things that help functions for using any type 
// here is an example:
// function identity(value: any) {
// return value // here it is too risky to do this
// }
// so we can solve this problem by:
function identity(value) {
    return value;
}
console.log(identity(43)); // do not really have to give that number thing ts automatically does it itself
// with arrays :
// function first <T>(arr : T[]) : T | undefined {
//     return arr[0]
// }
// with objects : 
function getId(obj) {
    return obj.id;
}
console.log(getId({ id: 1 }));
