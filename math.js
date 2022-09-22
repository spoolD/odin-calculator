function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
}

function operate(operator, a, b){
    if (operator === '+'){
        return add(a,b);
    }
    else if (operator === '-'){
        return subtract(a,b);
    }
    else if (operator === '*'){
        return multiply(a,b);
    }
    else if (operator === '/'){
        return divide(a,b);
    }
    else {
        return 'Operation Error'
    }
}

console.log(operate('+',2,4))
console.log(operate('-',8, 1))
console.log(operate('*',6, 3))
console.log(operate('/',10,2))
console.log(operate('w',2,4))