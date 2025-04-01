// JavaScript Objects: Properties and Methods

// 1. Creating an Object
const person = {
  name: 'John Doe', // Property
  age: 30, // Property
  city: 'New York', // Property

  // Method
  greet: function () {
    return `Hello, my name is ${this.name}.`;
  },

  // ES6 Method Syntax
  getAge() {
    return `I am ${this.age} years old.`;
  },
};

// 2. Accessing Properties
console.log('Name:', person.name); // Dot notation
console.log('Age:', person['age']); // Bracket notation

// 3. Modifying Properties
person.city = 'Los Angeles';
console.log('Updated City:', person.city);

// 4. Adding New Properties
person.country = 'USA';
console.log('Added Property - Country:', person.country);

// 5. Deleting Properties
delete person.age;
console.log('After Deleting Age:', person);

// 6. Calling Methods 
console.log(person.greet()); // Calling object method.

// 7. Checking Property Existence
console.log("Has 'name':", 'name' in person);
console.log("Has 'age':", 'age' in person);

// 8. Looping Through Properties
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 9. Object Methods (Built-in)
console.log('Object Keys:', Object.keys(person)); // Get all keys
console.log('Object Values:', Object.values(person)); // Get all values
console.log('Object Entries:', Object.entries(person)); // Get key-value pairs
