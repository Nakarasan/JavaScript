// Types of scopes

// Global Scope
var globalVar = "I am global";
let globalLet = "I am also global";

function test() {
    console.log(globalVar); // ✅ Accessible
    console.log(globalLet); // ✅ Accessible
}

test();
console.log(globalVar); // ✅ Accessible
console.log(globalLet); // ✅ Accessible

// Function Scope
function myFunction() {
    var functionVar = "I am inside a function";
    let functionLet = "I am also inside a function";
    
    console.log(functionVar); // ✅ Accessible
    console.log(functionLet); // ✅ Accessible
}

myFunction();

console.log(functionVar); // ❌ Error (Not Accessible)
console.log(functionLet); // ❌ Error (Not Accessible)

// BlockScope
if (true) {
    var blockVar = "I am var inside if block";
    let blockLet = "I am let inside if block";

    console.log(blockVar); // ✅ Accessible
    console.log(blockLet); // ✅ Accessible
}

console.log(blockVar); // ✅ Accessible (var is NOT block-scoped)
console.log(blockLet); // ❌ Error (let is block-scoped)

// A block in JavaScript is defined by {} (e.g., inside if, for, while blocks).


// Hoisting Difference
console.log(a); // ✅ undefined (hoisted)
var a = 10;

console.log(b); // ❌ Error (TDZ)
let b = 20;

// var is hoisted, but initialized as undefined.

//let is hoisted, but remains in a "Temporal Dead Zone (TDZ)" until initialized.