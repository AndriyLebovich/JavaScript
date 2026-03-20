/*

array.find()

What is this?
# An array method that return FIRS element that pass the condition

Example code :

const array = [5, 10, 15];
const result = array.find(n => n > 8);

console.log(result); // result is 10
*/

// Task : Find product with id = 2

const products = [
	{id: 1, name: "laptop"},
	{id: 2, name: "phone"},
	{id: 3, name: "tablet"}
];

const result = products.find(product => product.id = 2);

console.log(result);
