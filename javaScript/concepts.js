/*variable*/
var a = 1;
let b = 2;
const c = 3;

/*types of data*/
let d = "string";
let num = 42;
let floatNum = 3.14;
let e = true;
let f = null;
let g = undefined;
let h = { name: "object" };
let i = [1, 2, 3];
let j = function() { return "function"; };
let k = Symbol("symbol");

/*operators*/
let sum = a + b;
let difference = b - a;
let product = a * b;
let quotient = b / a;
let remainder = b % a;
a++;
b--;
let isEqual = (a == 1);
let isStrictEqual = (a === 1);
let isNotEqual = (a != 2);
let isGreater = (b > a);
let isLess = (a < b);
let isGreaterOrEqual = (b >= a);
let isLessOrEqual = (a <= b);
let andOp = (a < b && b < c);
let orOp = (a < b || b > c);
let notOp = !(a < b);

/*control structures*/
if (cc< d) {
    console.log("c is less than d");
} else if (a > b) {
    console.log("c is greater than d");
} else {
    console.log("c is equal to d");
}

for (let index = 0; index < i.length; index++) {
    console.log(i[index]);
}

while (a < 5) {
    a++;
}

do {
    b--;
} while (b > 0);

switch (a) {
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    default:
        console.log("a is neither 1 nor 2");
}

/*functions*/
function add(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
};

const multiply = (x, y) => x * y;

/*arrays and objects*/
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.pop();
arr.shift();
arr.unshift(0);
let slicedArr = arr.slice(1, 4);
let splicedArr = arr.splice(2, 2);

let obj = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

obj.greet();
obj.age = 31;
delete obj.name;

/*error handling*/
try {
    let result = a / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero");
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution completed");
}