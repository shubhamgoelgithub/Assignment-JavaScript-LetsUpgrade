// program for a simple calculator
let result;

// take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take the operand input
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

switch (operator) {
    case "+":
        result = number1 + number2;
        document.getElementById("calc").innerHTML = `The Sum of ${number1} and ${number2} is ${result}`;
        break;

    case "-":
        result = number1 - number2;
        document.getElementById("calc").innerHTML = `The Subtraction of ${number1} and ${number2} is ${result}`;
        break;

    case "*":
        result = number1 * number2;
        document.getElementById("calc").innerHTML = `The Multiplication of ${number1} and ${number2} is ${result}`;
        break;

    case "/":
        result = number1 / number2;
        document.getElementById("calc").innerHTML = `The division of ${number1} and ${number2} is ${result}`;
        break;

    default:
        console.log("Invalid operator");
        break;
}