var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result1 = add(number1, number2);
alert(result1);

var subtract = function(number1, number2) {
  return number1 - number2;
}

var result2 = subtract(number1, number2);
alert(result2);

var multiply = function(number1, number2) {
  return number1 * number2;
};

var result3 = multiply(number1, number2);
alert(result3);

var divide = function(number1, number2) {
  return number1 / number2;
}

var result4 = divide(number1, number2);
alert(result4);
