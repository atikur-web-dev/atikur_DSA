// ============================================
// 📚 COMPLETE JAVASCRIPT ARRAY MASTERY GUIDE
// 🎯 For: Web Dev + DSA + Software Engineering
// 👨‍💻 Author: Atikur Rahman
// ============================================

console.log("🚀 JavaScript Array Methods - Complete Guide\n");

// 1. CREATION METHODS
console.log("1️⃣ ARRAY CREATION METHODS");
console.log("=".repeat(50));

// a) Literal (Most Common)
let arr1 = [1, 2, 3, 4, 5];
console.log("Literal:", arr1);

// b) Constructor
let arr2 = new Array(1, 2, 3);
console.log("Constructor:", arr2);

// c) Array.of() - Single numberでも array করে
let arr3 = Array.of(7); // [7]
let arr4 = Array.of(1, 2, 3); // [1, 2, 3]
console.log("Array.of(7):", arr3);
console.log("Array.of(1,2,3):", arr4);

// d) Array.from() - Array-like to Array
let str = "hello";
let arr5 = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
console.log("Array.from('hello'):", arr5);

// e) Fill with values
let arr6 = new Array(5).fill(0); // [0, 0, 0, 0, 0]
console.log("new Array(5).fill(0):", arr6);

// 2. ADD/REMOVE ELEMENTS (Mutable)
console.log("\n2️⃣ ADD/REMOVE ELEMENTS");
console.log("=".repeat(50));

let fruits = ["apple", "banana"];

// a) push() - End এ add (Web Dev: Cart items add)
fruits.push("orange", "mango");
console.log("After push('orange','mango'):", fruits);

// b) pop() - End থেকে remove (DSA: Stack operations)
let last = fruits.pop();
console.log(`Popped: ${last}, Remaining:`, fruits);

// c) unshift() - Start এ add
fruits.unshift("strawberry");
console.log("After unshift('strawberry'):", fruits);

// d) shift() - Start থেকে remove
let first = fruits.shift();
console.log(`Shifted: ${first}, Remaining:`, fruits);

// e) splice() - Any position এ add/remove (Most Powerful!)
// Software Engineering: Dynamic array manipulation
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 0, 99); // Index 2-এ 99 insert, nothing delete
console.log("splice(2,0,99):", numbers);

numbers.splice(1, 2); // Index 1 থেকে 2 elements delete
console.log("splice(1,2):", numbers);

numbers.splice(1, 1, 88, 77); // Replace 1 element with 2 elements
console.log("splice(1,1,88,77):", numbers);

// 3. ACCESS & SEARCH METHODS
console.log("\n3️⃣ ACCESS & SEARCH METHODS");
console.log("=".repeat(50));

let nums = [10, 20, 30, 20, 40, 50];

// a) indexOf() - First occurrence (DSA: Linear Search)
console.log("indexOf(20):", nums.indexOf(20)); // 1

// b) lastIndexOf() - Last occurrence
console.log("lastIndexOf(20):", nums.lastIndexOf(20)); // 3

// c) includes() - Exists or not (Web Dev: Check if feature enabled)
console.log("includes(30):", nums.includes(30)); // true
console.log("includes(100):", nums.includes(100)); // false

// d) find() - First matching element (DSA: Condition-based search)
let firstGreaterThan25 = nums.find((num) => num > 25);
console.log("find(num > 25):", firstGreaterThan25); // 30

// e) findIndex() - Index of first matching
let indexGreaterThan25 = nums.findIndex((num) => num > 25);
console.log("findIndex(num > 25):", indexGreaterThan25); // 2

// f) findLast() & findLastIndex() (ES2023)
// Note: Node.js 16+ এ available
if (typeof nums.findLast === "function") {
  console.log(
    "findLast(num > 25):",
    nums.findLast((num) => num > 25)
  );
}

// 4. ITERATION METHODS (Web Dev: DOM Manipulation)
console.log("\n4️⃣ ITERATION METHODS");
console.log("=".repeat(50));

let prices = [100, 200, 300, 400];

// a) forEach() - Simple iteration (Most Common)
console.log("forEach():");
prices.forEach((price, index) => {
  console.log(`  Item ${index}: $${price}`);
});

// b) map() - Transform array (Web Dev: API response mapping)
let discountedPrices = prices.map((price) => price * 0.9);
console.log("map(price => price*0.9):", discountedPrices);

// c) filter() - Filter elements (Web Dev: Search filtering)
let expensiveItems = prices.filter((price) => price > 250);
console.log("filter(price > 250):", expensiveItems);

// d) reduce() - Single value তৈরি (DSA: Sum, Max, Min)
let total = prices.reduce((sum, price) => sum + price, 0);
console.log("reduce((sum, price) => sum + price, 0):", total);

// e) reduceRight() - Right to left reduce
let concatRight = prices.reduceRight((str, price) => str + price, "");
console.log("reduceRight():", concatRight);

// f) some() - Any element passes test (Software Engineering: Validation)
let hasPriceOver350 = prices.some((price) => price > 350);
console.log("some(price > 350):", hasPriceOver350);

// g) every() - All elements pass test
let allPositive = prices.every((price) => price > 0);
console.log("every(price > 0):", allPositive);

// 5. TRANSFORMATION METHODS
console.log("\n5️⃣ TRANSFORMATION METHODS");
console.log("=".repeat(50));

// a) slice() - Copy portion (DSA: Subarray problems)
let original = [1, 2, 3, 4, 5];
let sliced = original.slice(1, 4); // Index 1 থেকে 4 (4 exclude)
console.log("slice(1,4):", sliced);
console.log("Original untouched:", original);

// b) concat() - Merge arrays (Web Dev: Combining data from multiple APIs)
let arrA = [1, 2];
let arrB = [3, 4];
let arrC = [5, 6];
let merged = arrA.concat(arrB, arrC);
console.log("concat([3,4], [5,6]):", merged);

// c) flat() - Flatten nested arrays (DSA: Tree to array)
let nestedArray = [1, [2, [3, [4]]]];
console.log("flat():", nestedArray.flat()); // Depth 1
console.log("flat(2):", nestedArray.flat(2)); // Depth 2
console.log("flat(Infinity):", nestedArray.flat(Infinity)); // Complete flatten

// d) flatMap() - map() then flat() (Software Engineering: Data processing)
let sentences = ["Hello world", "JavaScript is awesome"];
let words = sentences.flatMap((sentence) => sentence.split(" "));
console.log("flatMap():", words);

// 6. SORTING & REVERSING
console.log("\n6️⃣ SORTING & REVERSING");
console.log("=".repeat(50));

// a) sort() - Important for DSA!
let unsorted = [40, 100, 1, 5, 25, 10];

// Default (string sort - wrong for numbers!)
let wrongSort = [...unsorted].sort();
console.log("Wrong sort (default):", wrongSort);

// Correct numeric sort (DSA: Sorting algorithms)
let ascending = [...unsorted].sort((a, b) => a - b);
console.log("Correct sort ascending (a-b):", ascending);

let descending = [...unsorted].sort((a, b) => b - a);
console.log("Correct sort descending (b-a):", descending);

// String sort
let names = ["Zahid", "Amina", "Bob", "cat"];
names.sort();
console.log("String sort:", names);

// Case-insensitive sort (Web Dev: User list sorting)
let mixedCase = ["apple", "Banana", "cherry", "Date"];
mixedCase.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case-insensitive sort:", mixedCase);

// b) reverse() - Reverse array (DSA: Palindrome, reversal problems)
let toReverse = [1, 2, 3, 4, 5];
toReverse.reverse();
console.log("reverse():", toReverse);

// 7. ARRAY INFORMATION METHODS
console.log("\n7️⃣ ARRAY INFORMATION METHODS");
console.log("=".repeat(50));

let sample = [10, 20, 30, 40, 50];

// a) length - Array length
console.log("length:", sample.length);

// b) isArray() - Check if array
console.log("Array.isArray(sample):", Array.isArray(sample));
console.log("Array.isArray({}):", Array.isArray({}));

// c) at() - Modern indexing (ES2022)
console.log("at(2):", sample.at(2)); // 30
console.log("at(-1):", sample.at(-1)); // 50 (last element)
console.log("at(-2):", sample.at(-2)); // 40

// 8. STRING CONVERSION
console.log("\n8️⃣ STRING CONVERSION");
console.log("=".repeat(50));

// a) toString() - Comma separated
console.log("toString():", fruits.toString());

// b) join() - Custom separator (Web Dev: URL params, CSV generation)
console.log("join():", fruits.join()); // Same as toString()
console.log("join(' - '):", fruits.join(" - "));
console.log("join(''):", fruits.join("")); // No separator
console.log("join(', '):", fruits.join(", ")); // CSV style

// 9. ARRAY COPY METHODS (ES2023)
console.log("\n9️⃣ MODERN METHODS (ES2023+)");
console.log("=".repeat(50));

// Note: These need newer Node.js versions
let baseArray = [1, 2, 3, 4, 5];

// a) toReversed() - Returns new reversed array (immutable)
if (typeof baseArray.toReversed === "function") {
  let reversedCopy = baseArray.toReversed();
  console.log("toReversed():", reversedCopy);
  console.log("Original unchanged:", baseArray);
}

// b) toSorted() - Returns new sorted array (immutable)
if (typeof baseArray.toSorted === "function") {
  let sortedCopy = baseArray.toSorted((a, b) => a - b);
  console.log("toSorted():", sortedCopy);
}

// c) toSpliced() - Returns new spliced array (immutable)
if (typeof baseArray.toSpliced === "function") {
  let splicedCopy = baseArray.toSpliced(2, 0, 99);
  console.log("toSpliced(2,0,99):", splicedCopy);
}

// d) with() - Returns new array with changed index (immutable)
if (typeof baseArray.with === "function") {
  let newArray = baseArray.with(2, 100); // Index 2 = 100
  console.log("with(2,100):", newArray);
}

// 10. ARRAY ITERATORS (For Advanced Use)
console.log("\n🔟 ITERATORS & GENERATORS");
console.log("=".repeat(50));

let iterArray = ["a", "b", "c"];

// a) entries() - [index, value] pairs (DSA: When need both)
console.log("entries():");
for (let [index, value] of iterArray.entries()) {
  console.log(`  ${index}: ${value}`);
}

// b) keys() - Indexes only
console.log("keys():", Array.from(iterArray.keys()));

// c) values() - Values only
console.log("values():", Array.from(iterArray.values()));

// 11. PRACTICAL DSA EXAMPLES
console.log("\n🎯 PRACTICAL DSA EXAMPLES USING ARRAY METHODS");
console.log("=".repeat(50));

// Example 1: Two Sum Problem (LeetCode #1)
function twoSum(nums, target) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

console.log("Two Sum [2,7,11,15], target=9:", twoSum([2, 7, 11, 15], 9));

// Example 2: Maximum Subarray (Kadane's Algorithm)
function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }
  return maxGlobal;
}

console.log(
  "Max Subarray [-2,1,-3,4,-1,2,1,-5,4]:",
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);

// Example 3: Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  return nums.filter((num, index) => nums.indexOf(num) === index);
}

console.log(
  "Remove Duplicates [1,1,2,2,3,4,4,5]:",
  removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5])
);

// Example 4: Chunk Array (Web Dev: Pagination)
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

console.log(
  "Chunk Array [1,2,3,4,5,6,7], size=3:",
  chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
);

// 12. PERFORMANCE TIPS
console.log("\n⚡ PERFORMANCE TIPS FOR DSA");
console.log("=".repeat(50));

console.log("1. Use Set/Map for O(1) lookups instead of includes()");
console.log("2. slice() is O(k) where k is slice size");
console.log("3. push/pop are O(1), unshift/shift are O(n)");
console.log("4. sort() is O(n log n)");
console.log("5. flat() depth affects performance");

// 13. COMMON USE CASES
console.log("\n💼 COMMON USE CASES IN REAL PROJECTS");
console.log("=".repeat(50));

console.log("Web Development:");
console.log("  - map(): API response transformation");
console.log("  - filter(): Search/Filter functionality");
console.log("  - reduce(): Shopping cart total");
console.log("  - sort(): User list sorting");

console.log("\nDSA:");
console.log("  - Two Pointer: slice(), splice()");
console.log("  - Sliding Window: slice()");
console.log("  - Dynamic Programming: Array as DP table");

console.log("\nSoftware Engineering:");
console.log("  - Data Processing: flatMap(), reduce()");
console.log("  - State Management: Immutable operations");
console.log("  - Algorithm Implementation");

// ============================================
// 🎯 PRACTICE PROBLEMS FOR EACH METHOD
// ============================================

console.log("\n📝 PRACTICE PROBLEMS (Create separate files for each)");
console.log("=".repeat(50));

const practiceProblems = [
  { method: "map()", problem: "Double all numbers in array" },
  { method: "filter()", problem: "Get all even numbers" },
  { method: "reduce()", problem: "Find product of all numbers" },
  { method: "find()", problem: "First number > 50" },
  { method: "some()", problem: "Check if any negative numbers" },
  { method: "every()", problem: "Check if all positive" },
  { method: "sort()", problem: "Sort users by age" },
  { method: "flat()", problem: "Flatten 3D array" },
  { method: "splice()", problem: "Remove middle element" },
  { method: "slice()", problem: "Get first 3 elements" },
];

practiceProblems.forEach((item, index) => {
  console.log(`${index + 1}. ${item.method}: ${item.problem}`);
});

console.log("\n" + "=".repeat(50));
console.log("✅ Total Methods Covered: 35+");
console.log("🔥 Ready for Web Dev, DSA & Software Engineering!");
console.log("📁 Save this as array-mastery.js and practice daily!");
console.log("=".repeat(50));
