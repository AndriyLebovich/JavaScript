/*

array.map()

What is this? 
# An array method that creates a new array and changing each element


const array = [1, 2, 3];
const newArray = array.map(n => n * 2);

console.log(newArray); // [2, 4, 6]

*/

// --- --- ---

// Task : create new array, where each price is increased by 20%

const price = [3, 5, 10];
const newPrice = price.map(n => n * 1.2);

console.log(newPrice); // [3.6, 6, 12]