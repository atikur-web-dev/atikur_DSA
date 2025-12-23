// ============================================
// ARRAY DECLARATION & BASIC METHODS
// ============================================

console.log("=== ARRAY DECLARATION & BASIC METHODS ===");

// Different ways to declare arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(6, 7, 8, 9, 10);
let arr3 = Array.from('hello'); // Creates array from iterable
let arr4 = Array.of(1, 2, 3); // Creates array from arguments
let arr5 = new Array(5).fill(0); // Creates array with 5 zeros

console.log("Array.from('hello'):", arr3);
console.log("Array.of(1, 2, 3):", arr4);
console.log("new Array(5).fill(0):", arr5);

// ============================================
// MUTATOR METHODS (Modify original array)
// ============================================

console.log("\n=== MUTATOR METHODS ===");

// 1. push() - Add to end
let fruits = ['apple', 'banana'];
fruits.push('orange', 'mango');
console.log("After push:", fruits);

// 2. pop() - Remove from end
let lastFruit = fruits.pop();
console.log("After pop:", fruits, "Removed:", lastFruit);

// 3. unshift() - Add to beginning
fruits.unshift('kiwi', 'grape');
console.log("After unshift:", fruits);

// 4. shift() - Remove from beginning
let firstFruit = fruits.shift();
console.log("After shift:", fruits, "Removed:", firstFruit);

// 5. splice() - Add/Remove at any position
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 0, 2.5, 2.7); // Insert at index 2
console.log("After splice insert:", numbers);
numbers.splice(3, 2); // Remove 2 elements from index 3
console.log("After splice remove:", numbers);
numbers.splice(1, 1, 20); // Replace element at index 1
console.log("After splice replace:", numbers);

// 6. reverse() - Reverse array in place
numbers.reverse();
console.log("After reverse:", numbers);

// 7. sort() - Sort array in place
let unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b); // Ascending
console.log("Sorted ascending:", unsorted);
unsorted.sort((a, b) => b - a); // Descending
console.log("Sorted descending:", unsorted);

// 8. fill() - Fill array with static value
let emptyArr = new Array(5);
emptyArr.fill('X');
console.log("After fill:", emptyArr);
emptyArr.fill('Y', 2, 4); // Fill from index 2 to 4
console.log("After fill with range:", emptyArr);

// 9. copyWithin() - Copy portion within array
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3); // Copy elements from index 3 to end to index 0
console.log("After copyWithin:", copyArr);

// ============================================
// ACCESSOR METHODS (Return new array/value)
// ============================================

console.log("\n=== ACCESSOR METHODS ===");

// 1. concat() - Merge arrays
let arrA = [1, 2];
let arrB = [3, 4];
let arrC = [5, 6];
let merged = arrA.concat(arrB, arrC);
console.log("After concat:", merged);

// 2. slice() - Extract portion of array
let original = [10, 20, 30, 40, 50];
let sliced = original.slice(1, 4);
console.log("Slice (1,4):", sliced);
console.log("Original unchanged:", original);

// 3. join() - Convert to string
let joinArr = ['Hello', 'World'];
console.log("Join with space:", joinArr.join(' '));
console.log("Join with comma:", joinArr.join(','));

// 4. toString() & toLocaleString()
console.log("toString():", joinArr.toString());
console.log("toLocaleString():", [123456.78, new Date()].toLocaleString());

// 5. indexOf() & lastIndexOf()
let searchArr = [1, 2, 3, 4, 3, 5];
console.log("indexOf(3):", searchArr.indexOf(3));
console.log("lastIndexOf(3):", searchArr.lastIndexOf(3));
console.log("indexOf(6):", searchArr.indexOf(6)); // Returns -1 if not found

// 6. includes()
console.log("includes(4):", searchArr.includes(4));
console.log("includes(4, 4):", searchArr.includes(4, 4)); // Search from index 4

// 7. flat() - Flatten nested arrays
let nested = [1, [2, [3, [4]]]];
console.log("flat():", nested.flat());
console.log("flat(2):", nested.flat(2));
console.log("flat(Infinity):", nested.flat(Infinity));

// 8. flatMap() - Map then flatten
let sentences = ["Hello world", "Good morning"];
let words = sentences.flatMap(sentence => sentence.split(' '));
console.log("flatMap:", words);

// ============================================
// ITERATION METHODS (Most important for DSA)
// ============================================

console.log("\n=== ITERATION METHODS ===");

let nums = [1, 2, 3, 4, 5];

// 1. forEach() - Execute function for each element
console.log("forEach:");
nums.forEach((num, index) => console.log(`nums[${index}] = ${num}`));

// 2. map() - Transform each element
let squares = nums.map(num => num * num);
console.log("Map squares:", squares);

// 3. filter() - Filter based on condition
let evens = nums.filter(num => num % 2 === 0);
console.log("Filter evens:", evens);

// 4. reduce() - Reduce to single value
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce sum:", sum);
let max = nums.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log("Reduce max:", max);

// 5. reduceRight() - Reduce from right
let strArr = ['H', 'e', 'l', 'l', 'o'];
let reversedStr = strArr.reduceRight((acc, curr) => acc + curr, '');
console.log("reduceRight reverse string:", reversedStr);

// 6. find() & findIndex()
let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'}
];
let user = users.find(u => u.id === 2);
console.log("Find user with id 2:", user);
let userIndex = users.findIndex(u => u.id === 2);
console.log("findIndex user with id 2:", userIndex);

// 7. some() - Check if any element passes test
let hasEven = nums.some(num => num % 2 === 0);
console.log("some(): Has even number?", hasEven);

// 8. every() - Check if all elements pass test
let allPositive = nums.every(num => num > 0);
console.log("every(): All positive?", allPositive);

// 9. entries(), keys(), values() - Iterators
console.log("entries():");
for (let [index, value] of nums.entries()) {
    console.log(`Index ${index}: ${value}`);
}

console.log("keys():");
for (let key of nums.keys()) {
    console.log(key);
}

console.log("values():");
for (let value of nums.values()) {
    console.log(value);
}

// ============================================
// DSA SPECIFIC METHODS & PATTERNS
// ============================================

console.log("\n=== DSA SPECIFIC METHODS & PATTERNS ===");

// 1. Two-pointer technique (for sorted arrays)
let sortedd = [1, 2, 3, 4, 5, 6, 7];
let target = 9;
let left = 0, right = sortedd.length - 1;
while (left < right) {
    let currentSum = sortedd[left] + sortedd[right];
    if (currentSum === target) {
        console.log(`Two-pointer: Found ${sortedd[left]} + ${sortedd[right]} = ${target}`);
        break;
    } else if (currentSum < target) {
        left++;
    } else {
        right--;
    }
}

// 2. Sliding window technique
let windowArr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 5;
let windowSum = 0;
for (let i = 0; i < k; i++) {
    windowSum += windowArr[i];
}
console.log(`Sliding window first sum: ${windowSum}`);

// 3. Prefix sum array
let prefixArr = [1, 2, 3, 4, 5];
let prefixSum = prefixArr.reduce((acc, curr, index) => {
    acc.push(index === 0 ? curr : acc[index-1] + curr);
    return acc;
}, []);
console.log("Prefix sum array:", prefixSum);

// 4. Chaining array methods (common in interviews)
let complexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = complexArr
    .filter(n => n % 2 === 0)        // Take even numbers
    .map(n => n * 2)                 // Double them
    .reduce((a, b) => a + b, 0);     // Sum them up
console.log("Method chaining result:", result);

// ============================================
// ARRAY MANIPULATION PATTERNS
// ============================================

console.log("\n=== ARRAY MANIPULATION PATTERNS ===");

// 1. Remove duplicates
let dupArr = [1, 2, 2, 3, 4, 4, 5];
let unique1 = [...new Set(dupArr)];
let unique2 = dupArr.filter((item, index) => dupArr.indexOf(item) === index);
console.log("Remove duplicates with Set:", unique1);
console.log("Remove duplicates with filter:", unique2);

// 2. Rotate array
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}
console.log("Rotate [1,2,3,4,5] by 2:", rotateArray([1,2,3,4,5], 2));

// 3. Flatten array recursively (interview question)
function flattenDeep(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), 
    []);
}
console.log("Deep flatten:", flattenDeep([1, [2, [3, [4]], 5]]));

// 4. Array chunking (common interview question)
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
console.log("Chunk array:", chunkArray([1,2,3,4,5,6,7], 3));

// ============================================
// PERFORMANCE CONSIDERATIONS
// ============================================

console.log("\n=== PERFORMANCE CONSIDERATIONS ===");

// 1. push/pop vs unshift/shift
console.log("push/pop are O(1), unshift/shift are O(n)");

// 2. Spread operator vs concat
let largeArr1 = new Array(10000).fill(1);
let largeArr2 = new Array(10000).fill(2);

console.time("concat");
let concatResult = largeArr1.concat(largeArr2);
console.timeEnd("concat");

console.time("spread");
let spreadResult = [...largeArr1, ...largeArr2];
console.timeEnd("spread");

// ============================================
// COMMON INTERVIEW QUESTIONS IMPLEMENTATIONS
// ============================================

console.log("\n=== COMMON INTERVIEW QUESTIONS ===");

// 1. Find missing number (1 to n)
function findMissingNumber(arr, n) {
    let expectedSum = n * (n + 1) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
console.log("Missing number in [1,2,3,5]:", findMissingNumber([1,2,3,5], 5));

// 2. Find duplicates
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    arr.forEach(item => {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    });
    
    return Array.from(duplicates);
}
console.log("Duplicates in [1,2,3,2,4,5,4]:", findDuplicates([1,2,3,2,4,5,4]));

// 3. Two Sum
function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return [];
}
console.log("Two sum indices for target 9:", twoSum([2, 7, 11, 15], 9));

// 4. Move zeros to end
function moveZeros(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return arr;
}
console.log("Move zeros:", moveZeros([0, 1, 0, 3, 12]));

// ============================================
// ARRAY DESTRUCTURING
// ============================================

console.log("\n=== ARRAY DESTRUCTURING ===");

// Basic destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(`Destructured: first=${first}, second=${second}, rest=${rest}`);

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(`Swapped: a=${a}, b=${b}`);

// Skipping elements
let [x, , y] = [1, 2, 3];
console.log(`Skipped: x=${x}, y=${y}`);

// Default values
let [p = 10, q = 20] = [1];
console.log(`Defaults: p=${p}, q=${q}`);

// ============================================
// ARRAY-LIKE OBJECTS CONVERSION
// ============================================

console.log("\n=== ARRAY-LIKE OBJECTS ===");

// Convert arguments to array
function exampleFunction() {
    const argsArray = Array.from(arguments);
    console.log("Arguments to array:", argsArray);
}
exampleFunction(1, 2, 3, 4);

// Convert NodeList to array
const mockNodeList = {
    0: 'div',
    1: 'span',
    2: 'p',
    length: 3
};
const nodeArray = Array.from(mockNodeList);
console.log("NodeList-like to array:", nodeArray);

// ============================================
// MEMORY & PERFORMANCE TIPS
// ============================================

console.log("\n=== MEMORY & PERFORMANCE TIPS ===");

// 1. Pre-allocate arrays when size is known
let preAllocated = new Array(1000);
console.log("Pre-allocated array length:", preAllocated.length);

// 2. Use typed arrays for numeric data
let typedArray = new Int32Array(10);
typedArray[0] = 42;
console.log("Typed array:", typedArray);

// 3. Avoid excessive method chaining for large arrays
console.log("Tip: Method chaining creates intermediate arrays");

// ============================================
// ES2023+ NEW METHODS
// ============================================

console.log("\n=== ES2023+ NEW METHODS ===");

// 1. findLast() & findLastIndex()
let arrLast = [1, 2, 3, 4, 3, 5];
console.log("findLast(3):", arrLast.findLast(x => x === 3));
console.log("findLastIndex(3):", arrLast.findLastIndex(x => x === 3));

// 2. toReversed(), toSorted(), toSpliced() - Non-mutating versions
let originalArr = [3, 1, 2];
let reversed = originalArr.toReversed();
let sorted = originalArr.toSorted();
console.log("toReversed():", reversed, "Original:", originalArr);
console.log("toSorted():", sorted, "Original:", originalArr);

// 3. with() - Non-mutating update
let updatedArr = originalArr.with(1, 99);
console.log("with(1, 99):", updatedArr, "Original:", originalArr);

console.log("\n=== END OF COMPREHENSIVE ARRAY GUIDE ===");