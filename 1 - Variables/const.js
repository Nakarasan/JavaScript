// Difference between `var` and `const` in JavaScript

// Reassignment
var reassignVar = 'Original var';
reassignVar = 'Reassigned var'; // ✅ Allowed
console.log('Reassigned var:', reassignVar);

const reassignConst = 'Original const';
try {
  reassignConst = 'Reassigned const'; // ❌ Error (const cannot be reassigned)
} catch (error) {
  console.error('Error:', error.message);
}

// Mutability
var mutableVar = { key: 'value' };
mutableVar.key = 'new value'; // ✅ Allowed
console.log('Mutable var:', mutableVar);

const mutableConst = { key: 'value' };
mutableConst.key = 'new value'; // ✅ Allowed (object properties can change)
console.log('Mutable const:', mutableConst);

try {
  mutableConst = { key: 'new object' }; // ❌ Error (const cannot be reassigned)
} catch (error) {
  console.error('Error:', error.message);
}

// Hoisting
console.log(hoistedVar); // ✅ Undefined (var is hoisted)
var hoistedVar = 'I am hoisted';

try {
  console.log(hoistedConst); // ❌ Error (const is in TDZ)
} catch (error) {
  console.error('Error:', error.message);
}
const hoistedConst = 'I am also hoisted';

// TDZ (Temporal Dead Zone) is a term used to describe the behavior of variables declared with let and const in JavaScript before they are initialized.. 
// In this zone, any reference to the variable will throw a ReferenceError, even though the variable is hoisted.
