
const calculator = require('./caluclator');

var add = calculator.add(5, 3);
var sub = calculator.substract(5, 3);
var mul = calculator.multiply(5, 3);
var div = calculator.divide(10, 5);

console.log("add result: ", add);
console.log("sub result: ", sub);
console.log("mul result: ", mul);
console.log("div result: ", div);