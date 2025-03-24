// Undefined variable
var employee; // `typeof employee` is "undefined"

// Global scope
var highScore = 99;

console.log('High Score - Global:', highScore); // ✅ Accessible globally

function getHighScore() {
  // Function Scope (Local scope)
  var marks = 88;
  console.log('Marks:', marks); // ✅ Accessible inside function

  // Overwriting the global `highScore`
  highScore = 98;
  console.log('High Score - Local:', highScore);
}

getHighScore();

// Trying to access local variable outside the function
try {
  console.log('Log marks outside the function:', marks); // ❌ Error: marks is not defined
} catch (error) {
  console.error('Error:', error.message); // Print only the error message
}

// Checking variable type
console.log('Type of highScore is:', typeof highScore); // ✅ "number"
