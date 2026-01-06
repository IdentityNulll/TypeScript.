// any can be put any type inside here
let x: any = "hello";
console.log(x.toUpperCase());

// unknown, down below doesn't work because the unknown has to be known bruh, basically it has to be cleared by ts
// let b : unknown = "Hello"
// console.log(b.toUpperCase())

// Union -> something that lets me put more than 1 type inside a variable or any parametr or something like that
let b: string | number | boolean;
b = "Hello";
b = 1;
b = true;
// alse here the last one works as you know reading capabilities
console.log(b);
// or i can also go like this:

function formatValue(value: string | number): string {
  // this : string makes it so that the function can only return string value so that it helpes us when we accidently return undefined as a return value
  // this is incorrect :
  // return value.toLowerCase() // because ts checks does it go right with all the types provided

  // or we can go and do this:
  if (typeof value === "string") {
    return value.toLowerCase();
  } else if (typeof value === "number") {
    return value.toFixed(0);
  }
  return "";
}

console.log(formatValue("Hello there"));

// Type -> type is something like making a type in value it is not like const, var, let it just creates types that we can use to put in variables
type Status = "loading" | "success" | "error";
// console.log(Status)
// like this:
let s: Status = "loading";
console.log(s);

// Array type
// let numbers : number[]= [1,2,3,"3"] // here  we can not make the array of any other type other than number
// and also if we forEach it or something like that and try to use any method it is gonna give us the exact method that we can use instead of all of them

// and also we can do this:
let numbers: [number, boolean] = [1, true]; // so right now we can only get this and nothing else
// console.log(numbers[0])
numbers.unshift();
// one thing to know is that push, unshift methods do not complain in ts even when things like above happen even tho there should be only 2 indexes
// but other than thos types pushed, other types will get error

// enum :
enum Sizes {
  Small,
  Medium,
  Large = 1,
}
let mySize: Sizes = Sizes.Large;
console.log(mySize);
// enums are like groups and we can call any of those and just use them anywhere
// so in enums if we declare one of them as 1 the rest is gonna count upwards and be decalred by compiler itself
enum whatever {
  Small = "Hll",
  Medium = "hsda",
} // but if we put string to it we have to do the same for every single one

// objects :
let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Null",
  retire: (date: Date) => console.log(date),
};
// here we can also define the object properities and everything else and also a function inside the obj
 

// literal : something that is exact and specific
type Quantity = 50 | 100
let quantity : Quantity = 50

type Metric = "cm" | "inch"
let metric : Metric = "cm"

// optional element -> optional chaining but on arrays
// customers?.[0]

// optional call
let log : any = null
log?.("a") // only works if the log has a function value otherwise return undefined