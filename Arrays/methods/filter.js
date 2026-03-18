/* 

array.filter()

What is this?
# It is return a new array with only the elements that pass the condition

Example code :

const array = [1, 2, 3, 4, 5];
const newArray = array.filter(n => n % 2 === 0);

cosole.log(newArray); [2, 4]

*/

// Task : Get an array with only users over 18 years old

const users = [
	{name: "Kate", age: 18},
	{name: "Jhon", age: 87},
	{name: "Shaq", age: 14}
];

const adults = users.filter(user => user.age > 18);

console.log(adults); // return {name: "Jhon", age: 87}