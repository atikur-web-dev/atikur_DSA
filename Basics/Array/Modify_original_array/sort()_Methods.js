// sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code unit values.
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // Output: [1, 10, 100, 25, 40, 5]
// To sort numbers in ascending order, a compare function can be provided.
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]
// To sort numbers in descending order, the compare function can be modified.
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers); // Output: [100, 40, 25, 10, 5, 1]
// Note: The sort() method modifies the original array.
