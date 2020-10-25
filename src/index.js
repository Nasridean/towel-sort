
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (!matrix) return [];
	let result = [];
	matrix.forEach((arr, index) => {
		let i = 0;
		let add = 1;
		let last = arr.length
		if (index % 2 !== 0) {
			last = -1;
			i = arr.length - 1;
			add = -add;
		}
		while (i !== last) {
			result.push(arr[i]);
			i += add;
		}
	})
  return result;
}
