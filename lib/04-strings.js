const text = 'The rain in Spain stays mainly on the plain';

// Get a character
console.log(text[12]);

// Get a range of characters
console.log(text.substring(12))
console.log(text.substring(12, 17))

// Length
console.log(text.length);

// Cases
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Split
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthString.split(',');
console.log(months);

const words = text.split(' ');
// const words = text.split(/\s+/);
console.log(words);

// Interpolation
const firstName = 'sally';
const lastName = 'jones';
console.log(`Hello there, ${firstName} ${lastName}`);
