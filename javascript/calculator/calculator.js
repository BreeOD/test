function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }

    return a / b;
}

function subtract(a, b) {
    return a - b;
}

const calculator = function (a, b, operation = 'add') {
    switch (operation) {
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'add':
        default:
            return add(a, b);
    }
};

calculator.add = add;
calculator.multiply = multiply;
calculator.divide = divide;
calculator.subtract = subtract;

module.exports = calculator;