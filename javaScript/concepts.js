/*
  Annotated JavaScript concepts file
  Each section below contains small examples and instructive comments
  to help you study core JavaScript concepts: variables, types,
  operators, control flow, functions, arrays/objects and error handling.
*/

// --- Variables ---
// `var` is function-scoped (legacy). Avoid for new code when possible.
var a = 1;

// `let` is block-scoped and allows reassignment.
let b = 2;

// `const` is block-scoped and the binding cannot be reassigned.
const c = 3;

// --- Types of data ---
// Primitive types: string, number, boolean, null, undefined, symbol
let d = "string";        // String primitive
let num = 42;             // Number (integers and floats share the same type)
let floatNum = 3.14;      // Floating-point number
let e = true;             // Boolean
let f = null;             // Explicitly empty value
let g = undefined;        // Declared but not assigned
let k = Symbol("symbol"); // Symbol: unique primitive

// Reference types: objects and arrays
let h = { name: "object" }; // Object literal (key/value pairs)
let i = [1, 2, 3];           // Array (ordered collection)

// Functions are first-class values and can be assigned to variables
let j = function() { return "function"; };

// --- Operators ---
// Arithmetic operators
let sum = a + b;           // addition
let difference = b - a;    // subtraction
let product = a * b;       // multiplication
let quotient = b / a;      // division
let remainder = b % a;     // modulo (remainder)

// Increment / decrement operators mutate the variable
a++; // post-increment
b--; // post-decrement

// Equality and strict equality
let isEqual = (a == 1);        // loose equality (performs type coercion)
let isStrictEqual = (a === 1); // strict equality (no coercion)
let isNotEqual = (a != 2);     // loose inequality

// Relational comparisons
let isGreater = (b > a);
let isLess = (a < b);
let isGreaterOrEqual = (b >= a);
let isLessOrEqual = (a <= b);

// Logical operators
let andOp = (a < b && b < c);
let orOp = (a < b || b > c);
let notOp = !(a < b);

// --- Control structures ---
// `if` / `else if` / `else` for decision making
// (Here we compare numeric `c` with string `d` as in the original file;
//  in practice prefer comparing compatible types to avoid surprising coercion.)
if (c < d) {
    console.log("c is less than d");
} else if (a > b) {
    console.log("c is greater than d");
} else {
    console.log("c is equal to d");
}

// `for` loop: indexed iteration over arrays
for (let index = 0; index < i.length; index++) {
    console.log(i[index]);
}

// `while` loop: repeat while a condition is true (watch for infinite loops)
while (a < 5) {
    a++;
}

// `do...while` ensures the loop body runs at least once
do {
    b--;
} while (b > 0);

// `switch` statement for multi-way branching, use `break` to avoid fall-through
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

// --- Functions ---
// Function declaration (hoisted) — can be called before definition
function add(x, y) {
    return x + y;
}

// Function expression assigned to a constant (not hoisted the same way)
const subtract = function(x, y) {
    return x - y;
};

// Arrow function: concise syntax and lexical `this` binding
const multiply = (x, y) => x * y;

// --- Arrays and Objects ---
let arr = [1, 2, 3, 4, 5];

// Array methods: push/pop modify the end, shift/unshift operate at the front
arr.push(6);    // add to end
arr.pop();      // remove last
arr.shift();    // remove first
arr.unshift(0); // add to front

// slice returns a shallow copy (non-destructive)
let slicedArr = arr.slice(1, 4); // elements at indices 1..3

// splice modifies the array and returns removed items
let splicedArr = arr.splice(2, 2); // remove 2 items starting at index 2

// Object with properties and a method
let obj = {
    name: "John",
    age: 30,
    greet: function() {
        // `this` refers to `obj` when called as `obj.greet()`
        console.log("Hello, " + this.name);
    }
};

obj.greet();      // call the object's method
obj.age = 31;     // update a property
delete obj.name;  // remove a property

// --- Error handling ---
try {
    // Dividing by zero returns `Infinity` in JavaScript rather than throwing.
    let result = a / 0;
    if (!isFinite(result)) {
        // Throw an Error object to handle this case explicitly
        throw new Error("Division by zero");
    }
} catch (error) {
    // `error` is the thrown Error object; `.message` has the message text
    console.error(error.message);
} finally {
    // Runs no matter what — useful for cleanup
    console.log("Execution completed");
}
