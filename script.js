let screenNumbers = [];
let secondNumber = [];
let isSecondLine = false;

const display = document.querySelector(".upperDisplay");
const secondDisplay = document.querySelector(".lowerDisplay");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".reset");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const substract = document.querySelector(".substract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");

one.addEventListener("click", () => addToDisplay(1));
two.addEventListener("click", () => addToDisplay(2));
three.addEventListener("click", () => addToDisplay(3));
four.addEventListener("click", () => addToDisplay(4));
five.addEventListener("click", () => addToDisplay(5));
six.addEventListener("click", () => addToDisplay(6));
seven.addEventListener("click", () => addToDisplay(7));
eight.addEventListener("click", () => addToDisplay(8));
nine.addEventListener("click", () => addToDisplay(9));
zero.addEventListener("click", () => addToDisplay(0));
equal.addEventListener("click", () => operate());
multiply.addEventListener("click", () => thing("*"));
divide.addEventListener("click", () => thing("/"));
add.addEventListener("click", () => thing("+"));
substract.addEventListener("click", () => thing("-"));
reset.addEventListener("click", () => resetThings());

/* ---------prepares math --------*/

function thing(operation) {
    if (screenNumbers.length === 0) {
    } else {
        if (isSecondLine === true) {
            display.style.cssText = "opacity: 1;";
            secondDisplay.textContent = "";
        }
        display.textContent = screenNumbers.join("") + operation;
        screenNumbers.push(operation);
        isSecondLine = false;
    }
}

/*--------for reset purposes ------- */

function resetThings(){
    screenNumbers = [];
    secondNumber = [];
    display.textContent = "";
    secondDisplay.textContent = "";
}

/* ---------adds numbers to screen -------*/

function addToDisplay(key) {
    if (isSecondLine === false) {
        if (screenNumbers.length >= 13) {
            screenNumbers.slice(0, 13);
        } else {
            key = String(key);
            screenNumbers.push(key);
            display.textContent = screenNumbers.join("");
        }
    } else if (isSecondLine === true) {
        resetThings();
        key = String(key);
        screenNumbers.push(key);
        display.textContent = screenNumbers.join("");
    }
}
/* -------- Does math and puts on screen --------*/
function operate() {
    isSecondLine = true;
    display.textContent = screenNumbers.join("") + "=";
    screenNumbers = eval(screenNumbers.join(""));
    secondDisplay.textContent = screenNumbers;
    display.style.cssText = "opacity: .5;";
    screenNumbers = String(screenNumbers).split("");
}

/*--------------Theme switching -----------*/

const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", () => {
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
    } else {
        theme.href = "light-theme.css";
    }
});
