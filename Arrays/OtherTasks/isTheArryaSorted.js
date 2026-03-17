
// Task : Check if the array is sorted in ascending order

function isTheArraySorted (arr) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] > arr[i + 1]) {
			return false
		}
	}
	return true;
}

console.log(isTheArraySorted([3,2,5,12,10,6,7,15,8]));