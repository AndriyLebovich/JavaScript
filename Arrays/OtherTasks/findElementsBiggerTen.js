
// Task : Find the number of array elements greater than 10.


let findElement = function (arr) {

	let newArray = [];

	for ( let i = 0; i < arr.length; i++) {
		if ( arr[i] >= 10) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

console.log(findElement([3,2,5,12,10,6,7,15,8]));

// or you can use filter() and an arrow function

/*

let findElement = arr => arr.filter(num => num > 10);

console.log(findElement([3,2,5,12,10,6,7,15,8]));

*/