let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperation(selectedOperator) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    
    currentInput = result;
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearInput() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('input').value = currentInput;
}
