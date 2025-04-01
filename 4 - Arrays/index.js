// 1. Creating an Array
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log('Fruits:', fruits);

// 2. Accessing Array Elements
console.log('First Fruit:', fruits[0]); // Access first element
console.log('Last Fruit:', fruits[fruits.length - 1]); // Access last element

// 3. Modifying Array Elements
fruits[2] = 'Grapes'; // Change the third element (index 2)
console.log('Modified Fruits:', fruits);

// 4. Adding Elements to an Array
fruits.push('Pineapple'); // Adds to the end of the array
console.log('After Push:', fruits);

fruits.unshift('Strawberry'); // Adds to the beginning of the array
console.log('After Unshift:', fruits);

// 5. Removing Elements from an Array
fruits.pop(); // Removes from the end of the array
console.log('After Pop:', fruits);

fruits.shift(); // Removes from the beginning of the array
console.log('After Shift:', fruits);

// 6. Finding Elements in an Array
console.log('Index of Banana:', fruits.indexOf('Banana')); // Find the index of 'Banana'
console.log('Includes Orange?', fruits.includes('Orange')); // Check if 'Orange' exists

// 7. Iterating Through an Array
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});

// 8. Array Methods (Transforming)
const numbers = [1, 2, 3, 4, 5];

// map: Create a new array by doubling the numbers
const doubledNumbers = numbers.map((num) => num * 2);
console.log('Doubled Numbers:', doubledNumbers);

// filter: Create a new array with numbers greater than 2
const filteredNumbers = numbers.filter((num) => num > 2);
console.log('Filtered Numbers (Greater than 2):', filteredNumbers);

// reduce: Calculate the sum of the numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of Numbers:', sum);

// 9. Destructuring Arrays
const [first, second, ...rest] = fruits;
console.log('First Fruit:', first);
console.log('Second Fruit:', second);
console.log('Remaining Fruits:', rest);

// 10. Sorting Arrays
const sortedFruits = fruits.sort();
console.log('Sorted Fruits:', sortedFruits);

// 11. Reversing Arrays
const reversedFruits = fruits.reverse();
console.log('Reversed Fruits:', reversedFruits);

// 12. Combining Arrays
const vegetables = ['Carrot', 'Potato', 'Tomato'];
const combined = fruits.concat(vegetables);
console.log('Combined Fruits and Vegetables:', combined);

// 13. Spreading Arrays (Using Spread Operator)
const newArray = [...fruits, 'Pomegranate'];
console.log('New Array with Spread:', newArray);

// 14. Checking Array Length
console.log('Number of Fruits:', fruits.length);
