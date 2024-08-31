function add(number1, number2) {
    return (Number(number1) + Number(number2));
}

function subtract(number1, number2) {
    return (Number(number1) - Number(number2));
}

function multiply(number1, number2) {
    return (Number(number1) * Number(number2));
}
function divide(number1, number2) {
    if (number2 == 0) {
        return Infinity;
    }
    return (Number(number1) / Number(number2));
}

let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';
let newNumber = false;

/*move it closer to the function */
const decimalButton = document.querySelector(".decimal");

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
        /* add a default */
    }
}

const numberButtons = document.querySelectorAll(".numbers");

const display = document.querySelector(".display");

numberButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        if (display.textContent.length < 12) {
            /*change to !newNumber */
            if (newNumber == false) {
                if (display.textContent == '0') {
                    display.textContent = button.textContent;
                }
                else {
                    /* change to += */
                    display.textContent = display.textContent + button.textContent;
                }
                /*remove*/
                equalButton.disabled = false;
            }
            else {
                newNumber = false;
                display.textContent = button.textContent;
                /*remove*/
                equalButton.disabled = false;
            }
            /* add equalButton.disabled = false; */
            
        }
    });
})

const negativeButton = document.querySelector(".negative");

negativeButton.addEventListener("click", () => {
    if (display.textContent[0] != '-') {
        /* just concate string */
        let splitted = display.textContent.split('')
        splitted.unshift('-');
        display.textContent = splitted.join('');
    }
    else {
        /* use substring */
        let splitted = display.textContent.split('')
        splitted.shift();
        display.textContent = splitted.join('');
    }
})


decimalButton.addEventListener("click", () => {
    /* check if button is disabled */
    if (display.textContent.indexOf('.') == -1) {
        decimalButton.disabled = true;
        /* use += */
        display.textContent = display.textContent + '.';
    }
})


const eraseButton = document.querySelector(".erase");

eraseButton.addEventListener("click", () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '0';
    decimalButton.disabled = false;
})

const backspaceButton = document.querySelector(".backspace");

backspaceButton.addEventListener("click", () => {
    /* use substring */
    let split = display.textContent.split('');
    console.log(split);
    split.pop();
    if (split.length == 0) {
        display.textContent = 0;
    }
    else {
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
            /* same lines inside the lines, move them outside */
            decimalButton.disabled = false;
            equalButton.disabled = true;

        }
        else {
            newNumber = true;
            operator = button.value;
            calculate();
            firstNumber = display.textContent;
            decimalButton.disabled = false;
            equalButton.disabled = true;
        }
    });
})

const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", () => {
    if (firstNumber == '') {
        alert('Enter two values!')
    }
    else if (operator == '') {
        alert('No operator!')
    }
    else {
        calculate();
        /* extract these three lines and move them in a new function */
        firstNumber = '';
        secondNumber = '';
        operator = '';
        newNumber = true;
        decimalButton.disabled = false;
    }
})

function calculate() {
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
}
