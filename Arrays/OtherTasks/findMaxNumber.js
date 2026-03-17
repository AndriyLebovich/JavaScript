

// Task : Find the largest value in the array


let findMaxNumb = function(arr) {

	let max = -Infinity;

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

console.log(findMaxNumb([3,2,5,12,10,6,7,15,8]));

// or with Math.max and arrow function

/*

let findMaxNumb = arr => Math.max(...arr);

console.log(findMaxNumb([3,2,5,12,10,6,7,15,8]));

*/

// or with reduce and arrow function

/*

let findMaxNumb = arr =>
	arr.reduce((max, numb) => numb > max ? numb : max);

console.log(findMaxNumb([3,2,5,12,10,6,7,15,8]));

*/