// splice() Methods of Array
let colors = ['red', 'green', 'blue', 'yellow'];

// Using splice() to remove elements
let removedColors = colors.splice(1, 2);
console.log(removedColors); // Output: ['green', 'blue']
console.log(colors); // Output: ['red', 'yellow']
// Using splice() to add elements
colors.splice(1, 0, 'purple', 'orange');
console.log(colors); // Output: ['red', 'purple', 'orange', 'yellow']
// Using splice() to replace elements
colors.splice(2, 1, 'pink');
console.log(colors); // Output: ['red', 'purple', 'pink', 'yellow']
//  --- IGNORE ---
