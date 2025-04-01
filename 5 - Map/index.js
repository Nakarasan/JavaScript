// 1. Creating a Map
const userMap = new Map();

// 2. Setting Key-Value Pairs
userMap.set('username', 'JaneSmith');
userMap.set('age', 28);
userMap.set('location', 'London');
console.log('User Map:', userMap);

// 3. Accessing Values by Key
console.log('Username:', userMap.get('username')); // Access value by key
console.log('Location:', userMap.get('location'));

// 4. Checking for a Key
console.log('Has Age:', userMap.has('age')); // Returns true if key exists
console.log('Has Country:', userMap.has('country')); // Returns false

// 5. Deleting a Key-Value Pair
userMap.delete('location');
console.log('User Map After Deletion:', userMap);

// 6. Getting the Size of the Map
console.log('Size of User Map:', userMap.size); // Returns number of key-value pairs

// 7. Clearing All Key-Value Pairs
userMap.clear();
console.log('User Map After Clearing:', userMap); // Map is now empty

// 8. Using Objects as Keys in a Map
const productKey = { id: 101, name: 'Smartwatch' };
const productMap = new Map();
productMap.set(productKey, 'Smartwatch Series 5');
console.log('Product Map:', productMap);

// Accessing value with object key
console.log('Product:', productMap.get(productKey));

// 9. Iterating Over a Map
const userDetails = new Map([
  ['username', 'Charlie'],
  ['age', 35],
  ['city', 'Berlin'],
]);

// Using forEach
userDetails.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Using for...of with entries()
for (let [key, value] of userDetails) {
  console.log(`${key}: ${value}`);
}

// 10. Getting Keys, Values, and Entries
console.log('User Details Keys:', [...userDetails.keys()]); // Array of keys
console.log('User Details Values:', [...userDetails.values()]); // Array of values
console.log('User Details Entries:', [...userDetails.entries()]); // Array of [key, value] pairs

// 11. Using Map with Objects as Values
const productDetails = new Map([
  ['productA', { name: 'Laptop', price: 1200 }],
  ['productB', { name: 'Tablet', price: 600 }],
]);

// Accessing object values within the map
console.log('Product A Name:', productDetails.get('productA').name);
console.log('Product B Price:', productDetails.get('productB').price);

// 12. Chaining Map Methods
userDetails.set('isEmployee', true).set('skills', ['JavaScript', 'Vue.js']);
console.log('Chained User Details:', userDetails);

// 13. Map vs Object (Key Type)
const userObj = {};
const detailsMap = new Map();

userObj['123'] = 'ID 123'; // Strings are always converted to keys as strings
detailsMap.set(123, 'ID 123'); // Map can have any type as key (not just strings)

console.log('User Object:', userObj);
console.log('Details Map:', detailsMap);
