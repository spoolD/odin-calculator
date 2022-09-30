
//Initialize variables
let clearOnNext = false;
let operator = '';
let numFirst = '';
let numSecond = '';
let operatorEvaluation = false;
const display = document.getElementById('display');
const equals = document.getElementById('equals');

// Update display when numbers clicked
document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', ()=>{ 
        //if statement handles clearing display on next number if operation is occuring
        if (!clearOnNext){
            display.textContent += button.textContent;
        }
        else {
            display.textContent = '';
            display.textContent += button.textContent;
            clearOnNext = false;
        }
    })
});

// On click of operator stores value, if operator already clicked evaluates first operation
document.querySelectorAll('.operator').forEach((button) => {
    button.addEventListener('click', () => { 
        if(!operatorEvaluation){
            numFirst = display.textContent;
            operator = button.textContent;
            clearOnNext = true;
            operatorEvaluation = true;
        }
        else{
            numSecond = display.textContent;
            display.textContent = operate(operator, Number(numFirst), Number(numSecond));
            clearOnNext = true;
            numFirst = display.textContent;
            operator = button.textContent;
        }           
    })
});

// Equals button operation
equals.addEventListener('click', () => {
    numSecond = display.textContent;
    display.textContent = operate(operator, Number(numFirst), Number(numSecond));
    operator = '';
})

// Math functions
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


