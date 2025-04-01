// 1. Basic Object Destructuring
const person = {
  name: 'Alice',
  age: 25,
  city: 'Paris',
};

// Destructuring assignment
const { name, age } = person;
console.log('Name:', name);
console.log('Age:', age);

// 2. Destructuring with Default Values
const { country = 'Unknown' } = person; // 'country' is not in 'person', so default is used
console.log('Country:', country);

// 3. Renaming Variables
const { city: hometown } = person;
console.log('Hometown:', hometown); // 'city' is now called 'hometown'

// 4. Nested Object Destructuring
const user = {
  id: 1,
  profile: {
    username: 'john_doe',
    email: 'john@example.com',
  },
};

// Extracting nested properties
const {
  profile: { username, email },
} = user;
console.log('Username:', username);
console.log('Email:', email);

// 5. Destructuring Function Parameters
function printUser({ name, age }) {
  console.log(`User: ${name}, Age: ${age}`);
}

printUser(person); // Passing 'person' object

// 6. Using Rest Operator (...) in Destructuring
const student = {
  firstName: 'Emma',
  lastName: 'Brown',
  grade: 'A',
  school: 'High School',
};

// Extract firstName, lastName and store the rest in 'restInfo'
const { firstName, lastName, ...restInfo } = student;
console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Rest Info:', restInfo); // { grade: 'A', school: 'High School' }

// 7. Destructuring with Default Values in Function Parameters
function greet({ name = 'Guest' }) {
  console.log(`Hello, ${name}!`);
}

greet(person); // Uses 'Alice'
greet({}); // Uses default 'Guest'
