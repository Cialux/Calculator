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
        
    }else {
        a = 1;
        
    }
}
function TWO() {
    if (Number.isInteger(a)) {
        b = 2;
        
    }else {
        a = 2;
        
    }
}
function THREE() {
    if (Number.isInteger(a)) {
        b = 3;
        
    }else {
        a = 3;
        
    }
}
function FOUR() {
    if (Number.isInteger(a)) {
        b = 4;
        
    }else {
        a = 4;
        
    }
}
function FIVE() {
    if (Number.isInteger(a)) {
        b = 5;
        
    }else {
        a = 5;
        
    }
}
function SIX() {
    if (Number.isInteger(a)) {
        b = 6;
        
    }else {
        a = 6;
        
    }
}
function SEVEN() {
    if (Number.isInteger(a)) {
        b = 7;
        
    }else {
        a = 7;
        
    }
}
function EIGHT() {
    if (Number.isInteger(a)) {
        b = 8;
    }else {
        a = 8;
        
    }
}
function NINE() {
    if (Number.isInteger(a)) {
        b = 9;
        
    }else {
        a = 9;
        
    }
}
function ZERO() {
    if (Number.isInteger(a)) {
        b = 0;
        
    }else {
        a = 0;
        
    }
}


function setTruePlus() {
    plusCheck = true;
}
function setTrueMinus() {
    minusCheck = true;
}
function setTrueDivide() {
    divCheck = true;
}
function setTrueMultiply() {
    multiCheck = true;
}

function calculate() {
    if (plusCheck == true) {
        console.log("plus")
        let sum = a + b;
        console.log(sum);
    }else if (minusCheck == true){
        console.log("minus")
        let sum = a - b;
        console.log(sum);
    }else if (divCheck == true){
        console.log("div")
        let sum = a / b;
        console.log(sum);
    }else if (multiCheck == true){
        console.log("multi")
        let sum = a * b;
        console.log(sum);
    }else {
        return "broken";
    }
    

}


