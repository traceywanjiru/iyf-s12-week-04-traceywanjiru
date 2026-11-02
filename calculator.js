function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot modulo by zero!";
    }
    return a % b;
}

function power(a, b) {
    return a ** b;
}
function calculate(num1, operator, num2) {
    
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else if (operator === "%") {
        return modulus(num1, num2);
    } else if (operator === "**") {
        return power(num1, num2);
    } else {
        return "Error: Invalid operator!";
    }
}


console.log(calculate(10, "+", 5));  
console.log(calculate(10, "-", 5));  
console.log(calculate(10, "*", 5));  
console.log(calculate(10, "/", 5));  
console.log(calculate(10, "/", 0));