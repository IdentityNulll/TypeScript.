var a = "hello";
var b = a;
// as -> it is like telling ts what something gonna return and we know that
var addOrConcat = function (a, b, c) {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
var myVal = addOrConcat(2, 2, "add");
console.log(myVal);
