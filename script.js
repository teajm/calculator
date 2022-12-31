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
    let total = 0;
    switch(operator){
        case '+':
            total = add(num1,num2);
            break;
        case '-':
            total = subtract(num1,num2);
            break;
        case '*':
            total = multiply(num1,num2);
            break;
        case '/':
            total = divide(num1,num2);
            break;  
    }
    return total;
}