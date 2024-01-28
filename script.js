let activeExpression  = '';

function refreshScreen() {
    document.getElementById('resultDisplay').innerText = activeExpression ;
}

function addSymbol(char) {
    activeExpression  += char;
    refreshScreen();
}

let val = 0;

function memoryRecall() {
    activeExpression  = val.toString();
    refreshScreen();
}

function memoryAdd() {
    val += eval(activeExpression );
    memoryClear();
}

function memorySubtract() {
    val -= eval(activeExpression );
    memoryClear();
}

function memoryStore() {
    val = eval(activeExpression );
    memoryClear();
}

function memoryMultiply() {
    val *= eval(activeExpression );
    memoryClear();
}

function memoryClear() {
    activeExpression  = '';
    refreshScreen();
}

function deleteMark() {
    activeExpression  = activeExpression .slice(0, -1);
    refreshScreen();
}

function power() {
    addSymbol('**');
}

function inverse() {
    try {
        activeExpression  = eval(`1 / (${activeExpression })`).toString();
        refreshScreen();
    } catch (error) {
        activeExpression  = 'Error';
        refreshScreen();
    }
}

function absolute() {
    try {
        activeExpression  = eval(`Math.abs(${activeExpression })`).toString();
        refreshScreen();
    } catch (error) {
        activeExpression  = 'Error';
        refreshScreen();
    }
}

function factorial() {
    try {
        const num = parseInt(activeExpression );
        if (num < 0) {
            throw new Error('Factorial of a negative number is not defined');
        }

        let factorialResult  = 1;
        for (let i = 2; i <= num; i++) {
            factorialResult  *= i;
        }

        activeExpression  = factorialResult .toString();
        refreshScreen();
    } catch (error) {
        activeExpression  = 'Error';
        refreshScreen();
    }
}

function switchSign () {
    try {
        activeExpression  = eval(`-(${activeExpression })`).toString();
        refreshScreen();
    } catch (error) {
        activeExpression  = 'Error';
        refreshScreen();
    }
}

function finalResult() {
    try {
        activeExpression  = eval(activeExpression ).toString();
        refreshScreen();
    } catch (error) {
        activeExpression  = 'Error';
        refreshScreen();
    }
}
