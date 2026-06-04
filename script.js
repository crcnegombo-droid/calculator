let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (expression === '') return;
    if (['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
        expression = expression.slice(0, -1);
    }
    expression += op;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        if (expression === '') return;
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function updateDisplay() {
    display.value = expression || '0';
}

// Initialize display
updateDisplay();