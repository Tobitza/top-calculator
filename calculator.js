const display = document.querySelector("#calculator-display");
const buttons = document.querySelectorAll(".calculator-button");

// Var displayed in display in the format: VAR1, OPERATOR, VAR2
let operand1 = null;
let operand2 = null;
let operator = null;

// Input fetching
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonTester(button);
    });
});

// Objects for operators
const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "X": (a, b) => a * b,
    "/": (a, b) => a / b
};

// Logic based on the input
function buttonTester (button) {
    value = button.textContent;
    if (/[0-9]/.test(value)) {
        display.textContent += value;
    }
    else if (value === ".") {
        if (!display.textContent.includes(".")) {
            display.textContent += value;
        }
    }
    else if (value in operators) {
        operand1 = display.textContent;
        operator = value;
        display.textContent = "";
        console.log(operand1);
    }
    else if (value === "=") {
        operand2 = display.textContent;
        display.textContent = operate(operand1, operator, operand2);
    }
    else if (value === "C") {
        clear();
    }
};

function clear () {
    operand1 = null;
    operand2 = null;
    operator = null;
    display.textContent = "";
};

function operate (op1, operator, op2) {
    const result = operators[operator](parseFloat(op1), parseFloat(op2));
    return result;
};

// TODO:
// 1. Daisy-chaining operations by storing curr val & operator
// 2. Disable operator buttons when one has already been pressed (no 2+ operators in a row)