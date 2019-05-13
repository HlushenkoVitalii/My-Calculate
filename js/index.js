
var keys = document.querySelector('.keys');
    deleted = document.querySelector('.cancel');
    inputC = document.getElementById('input');
    equally = document.querySelector('[data-value="="]');

keys.addEventListener('click', f1) ;
deleted.addEventListener('click', cleener);
equally.addEventListener('click', calculate);

var state = {
    operator: ' ',
    operator1: ' ',
    num1: ' ',
    num2: ' '
};

function f1(event) {
    var type = event.target.getAttribute('data-type');
    var value = event.target.getAttribute('data-value');

    if (!type) return;

    if (type === 'operator') {
        initOperator(value);
    }

    if (type === 'number') {
        initNumber(value);
    }
    visual();

}

function initOperator(operator) {
    if (operator === '=') return;

    if (state.num1 !== ' ' && state.operator !== ' ' && state.num2 !== ' ') {
        state.operator1 = operator;
         calculate();
    }

    else if (state.num1 === ' ' && operator === "-") {
        state.num1 = operator;
    }
    //else  if (state.num2 === ' ' && operator === "-" && state.operator !== ' ') {
        //state.num2 = operator;
    //}
    else if (state.num1 !== ' ') {
        state.operator = operator;
    }

}

function initNumber(number) {
    if (state.num1 !== ' ' && state.operator === ' ') {
        state.num1 += number;
    }
    else if (state.num1 === ' ' && state.operator === ' ') {
        state.num1 = number;
    }
    else if (state.num2 !== ' ' && state.operator !== ' ') {
        state.num2 += number;
    }
    else if (state.num1 !== ' ' && state.operator !== ' ') {
        state.num2 = number;
    }

}

function visual() {
    var visualstate = state.num1 + state.operator + state.num2;
    inputC.innerHTML = visualstate;

}

function cleener() {
    state.num1 = ' ';
    state.num2 = ' ';
    state.operator = ' ';
    state.operator1 = ' ';
    inputC.innerHTML = null;

}

function calculate() {
    operator = state.operator;
    value = event.target.getAttribute('data-value');

    if (operator === "-") {
        var minus = +state.num1 - +state.num2;
        state.num1 = minus;
        state.num2 = '';
        if (value === "=") {
            state.operator = ' ';
        }
        else {
            state.operator = state.operator1;
        }
    }
    else if (operator === "+") {
        var plus = +state.num1 + +state.num2;
        state.num1 = plus;
        state.num2 = '';
        if (value === "=") {
            state.operator = ' ';
        }
        else {
            state.operator = state.operator1;
        }

    }
    else if (operator === "*") {
        var multiply = +state.num1 * +state.num2;
        state.num1 = multiply;
        state.num2 = '';
        if (value === "=") {
            state.operator = ' ';
        }
        else {
            state.operator = state.operator1;
        }

    }
    else if (operator === "/") {
        var divide = +state.num1 / +state.num2;
        state.num1 = divide;
        state.num2 = '';
        if (value === "=") {
            state.operator = ' ';
        }
        else {
            state.operator = state.operator1;
        }

    }
    visual();

}







