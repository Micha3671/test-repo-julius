function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

console.log(sum(5, 3)); // Ausgabe: 8
console.log(divide(10, 2)); // Ausgabe: 5
// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.sum = sum;
module.exports.divide = divide;
