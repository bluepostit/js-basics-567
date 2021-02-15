const age = 14;

if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You can\'t vote');
}

const condition = 0;

if (condition) {
  console.log('✅ Condition is truthy!')
} else {
  console.log('❌ Condition is falsy');
}

// Ternary

const raining = false;
const accessory = (raining ? 'umbrella' : 'sunglasses');
console.log(`Remember to take your ${accessory}`);

// if - else if - else
const digit = '1';

if (digit === 0) {
  console.log('Zero');
} else if (digit === 1) {
  console.log('One');
} else {
  console.log('Unknown');
}
