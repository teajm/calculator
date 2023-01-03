let storedOps = null;
let storedNums1 = null;
let storedNums2 = null;
let resetFlag = false;
let equalsFlag = false;
let opsFlag = false;
const numberButtons = document.querySelectorAll('[number]');
const currentScreen = document.getElementById('screenCurrent');
const lastScreen = document.getElementById('screenLast');
const operatorButtons = document.querySelectorAll('[operator]');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');
const decimalButton = document.querySelector('.decimal');

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => storeOpsAndNums(button.textContent, currentScreen.textContent))
);

window.addEventListener('keydown', (e) => interpretKeypress(e),true);
equalsButton.addEventListener('click', () => evaluate());
backspaceButton.addEventListener('click', () => deleteFromDisplay());
clearButton.addEventListener('click', () => clearDisplay());
decimalButton.addEventListener('click', () => addDecimal());

function storeOpsAndNums(op, num){
    screenLast.textContent = `${num} ${op} `
    if(storedNums1 != null && storedNums2 == null){
        storedNums2 = num;
    }
    if(opsFlag == true){
        if(storedNums1 !== null && storedNums2 !==null && storedOps !=null){
            evaluate(storedOps,storedNums1, currentScreen.textContent);
        }
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
    if(storedNums1 !== null && storedNums2 !==null && storedOps !=null){
        screenLast.textContent = `${storedNums1} ${storedOps} ${storedNums2} =`
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
function clearDisplay(){
    currentScreen.textContent = ' ';
    screenLast.textContent = '';
    storedOps = null;
}

function deleteFromDisplay(){
    currentScreen.textContent = currentScreen.textContent.toString().slice(0,-1);
}

function addDecimal(){
    if(resetFlag === true){
        resetDisplay();
        resetFlag = false;
    }
    if(currentScreen.textContent.includes('.')){
        return;
    }
    currentScreen.textContent += '.';
}

function interpretKeypress(e){   
    if(e.key >= 0  && e.key <= 9) appendNumber(e.key);
    if(e.key == 'Backspace') deleteFromDisplay();
    if(e.key == '.') addDecimal();
    if(e.key == 'Enter') evaluate();
    if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        storeOpsAndNums(convertMathOp(e.key),currentScreen.textContent);
    }
}

function convertMathOp(key){
    if (key == '/'){
        return '÷';
    }
    else if (key == '*'){
        return '×';
    }
    else{
        return key;
    }
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
function percent(a){
    return divide(a,100);
}
function power(a,b){
    return Math.pow(a,b);
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

