type One = string;
type Two = number;
type Three = "Hello";

let a: One = "hello";
let b = a as Three;
// as -> it is like telling ts what something gonna return and we know that

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
    if (c === "add") {
        return a + b
    }
    return "" + a + b
};


let myVal : string = addOrConcat(2,2,"add") as string

// here this is actually a mistake because we know that it doesn't return a number here and even above it doesn't return string 
let nextVal : number = addOrConcat(2,2,"concat") as number
console.log(myVal)

// but it can check in places like below:
// 10 as string


// or here also we can overrule TS or (double cast it)
// 10 as unknown as string


// so where do we actually use this type of assertion or casting :
// const image = document.querySelector("img")! // so what is this ! mark doing here well it means that it is nonNull (basically that means that it will not return null) 
// image.src

// const myImage = document.getElementById("img") as HTMLImageElement
// myImage.src
// as you can see here we have two problems to solve one we can do !,  but what about the other one tho, well to solve both of those we can simply do this HTMLImageElement 

const year = document.querySelector(".year") as HTMLSpanElement
const thisYear : string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear


// 