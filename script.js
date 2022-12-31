const numberButtons = document.querySelectorAll('[number]');
const currentScreen = document.getElementById('screenCurrent');

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);
function appendNumber(num){
    console.log(num);
    currentScreen.textContent += num;
}
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => resetDisplay());

function resetDisplay(){
    currentScreen.textContent = ' ';
}
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return ubtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '÷':
            if(b === 0){
                return null;
            }
            return divide(num1,num2);
    }
}

