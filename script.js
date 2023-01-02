let storedOps = null;
let storedNums1 = null;
let storedNums2 = null;
let resetFlag = false;
let equalsFlag = false;
let opsFlag = false;
const numberButtons = document.querySelectorAll('[number]');
const currentScreen = document.getElementById('screenCurrent');
const operatorButtons = document.querySelectorAll('[operator]');
const equalsButton = document.querySelectorAll('[equals]');
const clearButton = document.querySelector('.clear');

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) =>
  button.addEventListener('click', () => storeOpsAndNums(button.textContent, currentScreen.textContent))
);
equalsButton.forEach((button) =>
  button.addEventListener('click', () => evaluate())
);

clearButton.addEventListener('click', () => resetDisplay());

function storeOpsAndNums(op, num){
    if(storedNums1 != null && storedNums2 == null){
        storedNums2 = num;
    }
    if(opsFlag == true){
        evaluate(storedOps,storedNums1, currentScreen.textContent);
    }
    else{
        storedNums1 = num;
    }
    storedOps = op;

 

    resetFlag = true;
    equalsFlag = false;
    opsFlag = true;
}

function appendNumber(num){

    if(resetFlag === true){
        resetDisplay();
        resetFlag = false;
    }
    currentScreen.textContent += num;
}
function evaluate(){
    if(equalsFlag == true){
        storedNums1 = currentScreen.textContent;
    }
    else{
        storedNums2 = currentScreen.textContent;
    }
    currentScreen.textContent = operate(storedOps, storedNums1, storedNums2);
    resetFlag = true;
    equalsFlag = true;
    opsFlag = false;
    storedNums1 = currentScreen.textContent;
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

