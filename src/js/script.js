let output = document.getElementById("result");

function calculate(operator) {
    let firstNumber = document.getElementById("num1").value;
    let secondNumber = document.getElementById("num2").value;

    if (firstNumber === "" || secondNumber === "") {
        output.innerHTML = "Error: input cannot be empty!";
        return;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        output.innerHTML = "Invalid input";
        return;
    }

    if (operator === "/" && secondNumber === 0) {
        output.innerHTML = "Cannot divide by zero";
        return;
    }

    let answer;

    if (operator === "+") {
        answer = firstNumber + secondNumber;
    } else if (operator === "-") {
        answer = firstNumber - secondNumber;
    } else if (operator === "*") {
        answer = firstNumber * secondNumber;
    } else if (operator === "/") {
        answer = firstNumber / secondNumber;
    }

    output.innerHTML = `Your answer is ${answer}`;
}