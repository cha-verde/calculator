function add(number1, number2) {
    return Number(number1) + Number(number2);
}

function subtract(number1, number2) {
    return Number(number1) - Number(number2);
}

function multiply(number1, number2) {
    return Number(number1) * Number(number2);
}
function divide(number1, number2) {
    if (number2 == 0) {
        return Infinity;
    }
    return Number(number1) / Number(number2);
}

let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';
let newNumber = false;

function operate(operator, number1, number2) {
    switch (operator) {
        case "add":
            return add(number1, number2)
        case "subtract":
            return subtract(number1, number2)
        case "multiply":
            return multiply(number1, number2)
        case "divide":
            return divide(number1, number2)
    }
}

const numberButtons = document.querySelectorAll(".numbers");

const display = document.querySelector(".display");

numberButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        if (display.textContent == '0' || newNumber == true) {
            if (button.textContent == 0) {

            }
            else {
                newNumber = false;
                display.textContent = button.textContent;
            }
        }
        else if (operator != '') {
            if (newNumber == true) {
                display.textContent = button.textContent;
            }
            else {
                display.textContent = display.textContent + button.textContent;
            }
        }
        else {
            display.textContent = display.textContent + button.textContent;
        }

    });
})

const eraseButton = document.querySelector(".erase");

eraseButton.addEventListener("click", () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '0';
})

const backspaceButton = document.querySelector(".backspace");

backspaceButton.addEventListener("click", () => {
    let split = display.textContent.split('');
    console.log(split);
    split.pop();
    if(split.length == 0){
        display.textContent = 0;
    }
    else{
        display.textContent = split.join('');
    }
})



const operatorButtons = document.querySelectorAll(".operators");

operatorButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        if (firstNumber.length == 0) {
            firstNumber = display.textContent;
            display.textContent = '0';
            operator = button.value;
            newNumber = true;
        }
        else {
            newNumber = true;
            operator = button.value;
            calculate();
            firstNumber = display.textContent;
        }
    });
})

const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", () => {
    if (firstNumber == '') {
        alert('Enter two value!')
    }
    else if (operator == '') {
        alert('No operator!')
    }
    else {
        calculate();
        firstNumber = '';
        secondNumber = '';
        operator = '';
        newNumber = true;
    }
})

function calculate() {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
}