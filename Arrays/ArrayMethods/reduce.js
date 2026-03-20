/*

array.reduce()

What is this?
# A method that reduces an array to a single value

Example code :

const array = [1,2,3,4]
const newArray = array.reduce((sum, n) => sum + n, 0)

console.log(newArray); // 10
*/

// Task : Calculate the total amount of orders.

const orders = [100, 200, 50, 300];
const sumOrders = orders.reduce((sum, n) => sum + n, 0);

console.log(sumOrders);