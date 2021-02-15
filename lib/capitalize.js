const capitalize = (text) => {
  const first = text[0].toUpperCase();
  const rest = text.substring(1).toLowerCase();
  return `${first}${rest}`;
};

const sentence = 'The quick brown FOX';
console.log(capitalize(sentence));
