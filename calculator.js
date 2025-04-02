const display = document.querySelector("#calculator-display");
const buttons = document.querySelectorAll(".calculator-button");

// Input fetching
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = "";
        buttonTester(button);
        // const value = button.textContent;
        // display.textContent += value;
    });
});

// Objects for operators and special cases (C & =)
const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "X": (a, b) => a * b,
    "/": (a, b) => a / b,
}

const special = {
    "C": clearDisplay(),
    "=": calculate(),
}



// Operator-specific logic (non-numbers)
function buttonTester (button) {
    if (/[0-9]/.test(button.textContent)) {
        display.textContent += button.textContent;
    }
    else {
        
    }
}





// Var displayed in display in the format: VAR1, OPERATOR, VAR2
let var1 = 0;
let var2 = 0;
let operator = "";

// Basic calculations -DISCONTINUED, will use functions inside operators object (found above)
// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }
