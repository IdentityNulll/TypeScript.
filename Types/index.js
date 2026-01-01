// any can be put any type inside here
var x = "hello";
console.log(x.toUpperCase());
// unknown, down below doesn't work because the unknown has to be known bruh, basically it has to be cleared by ts
// let b : unknown = "Hello"
// console.log(b.toUpperCase())
// Union -> something that lets me put more than 1 type inside a variable or any parametr or something like that
var b;
b = "Hello";
b = 1;
b = true;
// alse here the last one works as you know reading capabilities
console.log(b);
// or i can also go like this:
function formatValue(value) {
    // this is incorrect :
    // return value.toLowerCase() // because ts checks does it go right with all the types provided
    // or we can go and do this:
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    else if (typeof value === "number") {
        return value.toFixed(0);
    }
    return "";
}
console.log(formatValue("Hello there"));
// console.log(Status)
// like this:
var s = "loading";
console.log(s);
