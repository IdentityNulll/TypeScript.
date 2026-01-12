// what are generics ?
// generics are things that help functions for using any type
// here is an example:

// function identity(value: any) {
// return value // here it is too risky to do this
// }

// so we can solve this problem by:

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(43)); // do not really have to give that number thing ts automatically does it itself

// with arrays :
// function first <T>(arr : T[]) : T | undefined {
//     return arr[0]
// }

// with objects :
function getId<T>(obj: { id: T }) {
  return obj.id;
}

console.log(getId({ id: 1 }));

// generics in types and interfaces

type Box<T> = {
  value: T;
};

const box1: Box<number> = {value: 10,};
const box2 : Box <string> = {value : "Helloooooo"}

// interface :
interface ApiResponse<T> {
    data : T,
    error : string | null
}

// const res : ApiResponse <> =  {
    
//     error : null
// }   