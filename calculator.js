const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const header = document.getElementById("header");

let a = " ";
let b = " ";
let temp;

let plusCheck = false;
let minusCheck = false;
let divCheck = false;
let multiCheck = false;
let operatorClicked = 0;
let currentOperator = "";


one.addEventListener('click', ONEE);
two.addEventListener('click', TWOE);
three.addEventListener('click', THREEE);
four.addEventListener('click', FOURE);
five.addEventListener('click', FIVEE);
six.addEventListener('click', SIXE);
seven.addEventListener('click', SEVENE);
eight.addEventListener('click', EIGHTE);
nine.addEventListener('click', NINEE);
zero.addEventListener('click', ZEROE);
plus.addEventListener('click', setTruePlus);
minus.addEventListener('click', setTrueMinus);
divide.addEventListener('click', setTrueDivide);
multiply.addEventListener('click', setTrueMultiply);
clear.addEventListener('click', clearing);
equal.addEventListener('click', calculate);

function ONEE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "1";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "1";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }
    }else {
        if (a == " ") {
            a = "1";
            header.innerHTML = `${a}`
        }else {
            a = a + "1";
            header.innerHTML = `${a}`
        }
    }
}

function TWOE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "2";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "2";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "2";
            header.innerHTML = `${a}`
        }else {
            a = a + "2";
            header.innerHTML = `${a}`
        }
    }
}

function THREEE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "3";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "3";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "3";
            header.innerHTML = `${a}`
        }else {
            a = a + "3";
            header.innerHTML = `${a}`
        }
    }
}

function FOURE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "4";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "4";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "4";
            header.innerHTML = `${a}`
        }else {
            a = a + "4";
            header.innerHTML = `${a}`
        }
    }
}

function FIVEE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "5";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "5";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "5";
            header.innerHTML = `${a}`
        }else {
            a = a + "5";
            header.innerHTML = `${a}`
        }
    }
}

function SIXE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "6";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "6";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "6";
            header.innerHTML = `${a}`
        }else {
            a = a + "6";
            header.innerHTML = `${a}`
        }
    }
}

function SEVENE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "7";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "7";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "7";
            header.innerHTML = `${a}`
        }else {
            a = a + "7";
            header.innerHTML = `${a}`
        }
    }
}

function EIGHTE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "8";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "8";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "8";
            header.innerHTML = `${a}`
        }else {
            a = a + "8";
            header.innerHTML = `${a}`
        }
    }
}

function NINEE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "9";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "9"
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "9";
            header.innerHTML = `${a}`
        }else {
            a = a + "9";
            header.innerHTML = `${a}`
        }
    }
}

function ZEROE() {
    if (operatorClicked == 1) {
        if (b == " ") {
            b = "0";
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }else {
            b = b + "0"
            header.innerHTML = `${a} ${currentOperator} ${b}`
        }

    }else {
        if (a == " ") {
            a = "0";
            header.innerHTML = `${a}`
        }else {
            a = a + "0";
            header.innerHTML = `${a}`
        }
    }
}

function clearing() {
    a = " ";
    b = " ";
    plusCheck = false;
    minusCheck = false;
    divCheck = false;
    multiCheck = false;
    header.innerHTML = "";
    console.log("Cleared")
}

function setTruePlus() {
    currentOperator = "+";
    operatorClicked = 1;
    console.log(operatorClicked);
    plusCheck = true;
    header.innerHTML = (`${a} + `);
}
function setTrueMinus() {
    currentOperator = "-";
    operatorClicked = 1;
    minusCheck = true;
    header.innerHTML = (`${a} - `);
}
function setTrueDivide() {
    currentOperator = "/";
    operatorClicked = 1;
    divCheck = true;
    header.innerHTML = (`${a} / `);
}
function setTrueMultiply() {
    currentOperator = "*";
    operatorClicked = 1;
    multiCheck = true;
    header.innerHTML = (`${a} * `);
}

function calculate() {
    a = parseInt(a);
    b = parseInt(b);
    if (plusCheck == true) {
        let sum = a + b;
        header.innerHTML = sum;
    }else if (minusCheck == true){
        console.log("minus")
        let sum = a - b;
        header.innerHTML = sum;;
    }else if (divCheck == true){
        console.log("div")
        let sum = a / b;
        header.innerHTML = sum;
    }else if (multiCheck == true){
        console.log("multi")
        let sum = a * b;
        header.innerHTML = sum;
    }else {
        return "broken";
    }
    

}


