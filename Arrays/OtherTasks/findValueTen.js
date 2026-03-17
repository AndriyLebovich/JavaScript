

// Task : Find the first occurrence of 10 from the end of the array and print its index.

function findValue (arr) {

	for(let i = arr.length - 1; i > 0; i--) {
		if(arr[i] > 10) {
			return arr[i];
		}
	}
	return false
}

console.log(findValue([3,2,5,12,10,6,7,15,8]));

// or we can find value with findLast()

/*

let findValue = arr => arr.findLast(numb => numb > 10);

console.log(findValue([3,2,5,12,10,6,7,15,8]));

*/