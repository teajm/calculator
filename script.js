let storedOps = '';
let storedNums = 0;
let resetFlag = false;
const numberButtons = document.querySelectorAll('[number]');
const currentScreen = document.getElementById('screenCurrent');
const operatorButtons = document.querySelectorAll('[operator]');
const equalsButton = document.querySelectorAll('[equals]');
const clearButton = document.querySelector('.clear');
numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) =>
  button.addEventListener('click', () => storeOpsAndNums(button.textContent,currentScreen.textContent))
);
equalsButton.forEach((button) =>
  button.addEventListener('click', () => outputMath(storedOps, storedNums, currentScreen.textContent))
);
clearButton.addEventListener('click', () => resetDisplay());

function storeOpsAndNums(op, num){
    storedOps = op;
    storedNums = num;
    resetFlag = true;
}
function appendNumber(num){
    if(resetFlag === true){
        resetDisplay();
        resetFlag = false;
    }
    console.log(num);
    currentScreen.textContent += num;
}
function outputMath(ops, num1, num2){
    storedNums = num2;
    currentScreen.textContent = operate(ops, num1, num2);
    resetFlag = true;
}

function resetDisplay(){
    currentScreen.textContent = ' ';
}
function add(num1, num2){
    return Number(num1) + Number(num2);
}
function subtract(num1, num2){
    return Number(num1) - Number(num2);
}
function multiply(num1, num2){
    return Number(num1) * Number(num2);
}
function divide(num1, num2){
    return Number(num1) / Number(num2);
}
function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '×':
            return multiply(num1,num2);
        case '÷':
            if(num2 === 0){
                return null;
            }
            return divide(num1,num2);
    }
}

