// business logic
function add(number1, number2) {
  return number1 + number2;
}

function sub(number1, number2) {
  return number1 - number2;
}

function mult(number1, number2) {
  return number1 * number2;
}

function div(number1, number2) {
  return number1 / number2;
}

//user interface

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another Number:"));
// const result = mult(number1, number2);

// alert(result);

// Alternatively...
// window.alert("The difference of your numbers =" + subtract(number1, number2) + ".");
// window.alert("The sum of your numbers =" + add(number1, number2) + ".");
// window.alert("The remainder of your numbers =" + div(number1, number2) + ".");
// window.alert("The product of your numbers =" + mult(number1, number2) + ".");

//Or...
window.alert(
  "Your numbers were: " +
    number1 +
    " and " +
    number2 +
    ". " +
    "The difference of your numbers =" +
    sub(number1, number2) +
    "."
);

window.alert(
  "Your numbers were: " +
    number1 +
    " and " +
    number2 +
    ". " +
    "The sum of your numbers =" +
    add(number1, number2) +
    "."
);

window.alert(
  "Your numbers were: " +
    number1 +
    " and " +
    number2 +
    ". " +
    "The remainder of your numbers =" +
    div(number1, number2) +
    "."
);

window.alert(
  "Your numbers were: " +
    number1 +
    " and " +
    number2 +
    ". " +
    "The product of your numbers =" +
    mult(number1, number2) +
    "."
);
