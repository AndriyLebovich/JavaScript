

// Task : Find the smallest value in the array


let findMinNumb = function(arr) {

	let min = Infinity;

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i]
		}
	}
	return min;
}

console.log(findMinNumb([3,2,5,12,10,6,7,15,8]));

// also we can find min with Math.min

/*

let findMinNumb = arr => Math.min(...arr);

console.log(findMinNumb([3,2,5,12,10,6,7,15,8]));

*/

// or with reduce

/*

let findMinNumb = arr =>
	arr.reduce((min, numb) => numb < min ? numb : min);

console.log(findMinNumb([3,2,5,12,10,6,7,15,8]));

*/