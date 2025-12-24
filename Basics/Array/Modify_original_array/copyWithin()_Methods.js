// copyWithin() method copies a sequence of array elements within the array to another position in the same array, overwriting the existing values.

let array = [1, 2, 3, 4, 5];
console.log("Original Array:", array);

// Copy elements starting from index 0 to index 3
array.copyWithin(3, 0, 2);
console.log("Array after copyWithin(3, 0, 2):", array);
// Output: [1, 2, 3, 1, 2]
