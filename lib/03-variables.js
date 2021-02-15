// In Ruby:
// name = 'susan'

// In JavaScript
// first: let, var, const

let name = 'susan';
const age = 23;
let score = 67;

// Generally avoid:
var totalGrade = 98;

console.log(name);
console.log(age);

name = 'suzie';
console.log(name);

// Error: can't re-assign to const
// age = 24;
console.log(age);

score += 5;
console.log(score);
