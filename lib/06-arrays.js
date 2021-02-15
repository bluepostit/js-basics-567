const fruits = [];

// C-reate
fruits.push('mango');
fruits.push('banana');
console.log(fruits);

// R-ead
console.log(fruits[0]);

// U-pdate
fruits[1] = 'cherry';
console.log(fruits);

// D-elete
fruits.splice(0, 1);
console.log(fruits);


const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});
