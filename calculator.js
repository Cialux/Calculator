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
let b;

let plusCheck = false;
let minusCheck = false;
let divCheck = false;
let multiCheck = false;


one.addEventListener('click', ONE);
two.addEventListener('click', TWO);
three.addEventListener('click', THREE);
four.addEventListener('click', FOUR);
five.addEventListener('click', FIVE);
six.addEventListener('click', SIX);
seven.addEventListener('click', SEVEN);
eight.addEventListener('click', EIGHT);
nine.addEventListener('click', NINE);
zero.addEventListener('click', ZERO);
plus.addEventListener('click', setTruePlus);
minus.addEventListener('click', setTrueMinus);
divide.addEventListener('click', setTrueDivide);
multiply.addEventListener('click', setTrueMultiply);
clear.addEventListener('click', clearing);
equal.addEventListener('click', calculate);

function clearing() {
    let a = " ";
    let b;
    let plusCheck = false;
    let minusCheck = false;
    let divCheck = false;
    let multiCheck = false;
    console.log("Cleared")
}


function ONE() {
    if (Number.isInteger(a)) {
        b = 1;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 1;
        header.innerHTML = a
    }
}
function TWO() {
    if (Number.isInteger(a)) {
        b = 2;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 2;
        header.innerHTML = a
    }
}
function THREE() {
    if (Number.isInteger(a)) {
        b = 3;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 3;
        header.innerHTML = a
    }
}
function FOUR() {
    if (Number.isInteger(a)) {
        b = 4;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 4;
        header.innerHTML = a
    }
}
function FIVE() {
    if (Number.isInteger(a)) {
        b = 5;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 5;
        header.innerHTML = a
    }
}
function SIX() {
    if (Number.isInteger(a)) {
        b = 6;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 6;
        header.innerHTML = a
    }
}
function SEVEN() {
    if (Number.isInteger(a)) {
        b = 7;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 7;
        header.innerHTML = a
    }
}
function EIGHT() {
    if (Number.isInteger(a)) {
        b = 8;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 8;
        header.innerHTML = a
    }
}
function NINE() {
    if (Number.isInteger(a)) {
        b = 9;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 9;
        header.innerHTML = a
    }
}
function ZERO() {
    if (Number.isInteger(a)) {
        b = 0;
        if (plusCheck == true) {
            header.innerHTML = (`${a} + ${b}`);
        }else if (minusCheck == true){
            header.innerHTML = (`${a} - ${b}`);
        }else if (divCheck == true){
            header.innerHTML = (`${a} / ${b}`);
        }else if (multiCheck == true){
            header.innerHTML = (`${a} * ${b}`);
        }else {
            return "broken";
        }
    }else {
        a = 0;
        header.innerHTML = a
    }
}


function setTruePlus() {
    plusCheck = true;
    header.innerHTML = (`${a} + `);
}
function setTrueMinus() {
    minusCheck = true;
    header.innerHTML = (`${a} - `);
}
function setTrueDivide() {
    divCheck = true;
    header.innerHTML = (`${a} / `);
}
function setTrueMultiply() {
    multiCheck = true;
    header.innerHTML = (`${a} * `);
}

function calculate() {
    if (plusCheck == true) {
        console.log("plus")
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


