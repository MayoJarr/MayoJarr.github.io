let screenNumbers = [];
let secondNumber = [];
let isSecondLine = false;

const display = document.querySelector(".upperDisplay");
const secondDisplay = document.querySelector(".lowerDisplay");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const ce = document.querySelector(".ce");
const buttons = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operate]");

buttons.forEach((button) => {
    button.addEventListener("click", () => addToDisplay(button.innerText));
});
operators.forEach((item) => {
    item.addEventListener("click", () => addOperator(item.innerText));
});
window.addEventListener("keydown", (e) => {
    if ((e.key >= 0 && e.key <= 9) || e.key === "," || e.key === ".")
        addToDisplay(e.key);
    else if (e.key === "/") e.preventDefault();
    if (e.key === "*" || e.key === "/" || e.key === "-" || e.key === "+")
        addOperator(e.key);
    else if (e.key === "Enter" || e.key === "=") operate();
    else if (e.key === "Backspace") CE();
});
equal.addEventListener("click", () => operate());
reset.addEventListener("click", () => resetThings());
ce.addEventListener("click", () => CE());

/*--------for reset purposes ------- */

function CE() {
    screenNumbers.pop();
    if (isSecondLine === false) {
        display.textContent = screenNumbers.join("");
    } else if (isSecondLine === true) {
        secondDisplay.textContent = screenNumbers.join("");
    }
}

function resetThings() {
    screenNumbers = [];
    secondNumber = [];
    display.textContent = "";
    secondDisplay.textContent = "";
}

/* ---------prepares math --------*/

function addOperator(operation) {
    if (screenNumbers[screenNumbers.length - 1] === operation) return;
    if (screenNumbers.length === 0) {
    } else {
        if (isSecondLine === true) {
            display.style.cssText = "opacity: 1;";
            secondDisplay.textContent = "";
        }
        if (operation === "%") {
            display.textContent = screenNumbers.join("") + operation;
            screenNumbers.unshift("(");
            screenNumbers.push("/100)*");
            isSecondLine = false;
        } else {
            display.textContent = screenNumbers.join("") + operation;
            screenNumbers.push(operation);
            isSecondLine = false;
        }
    }
}

/* ---------adds numbers to screen -------*/

function addToDisplay(key) {
    if (key === "," || key === ".") {
        key = ".";
        const isFloat = screenNumbers.some((item) => item === ".");
        if (isFloat === true) return;
    }
    display.style.cssText = "opacity: 1;";

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
        isSecondLine = false;
        key = String(key);
        screenNumbers.push(key);
        display.textContent = screenNumbers.join("");
    }
}
/* -------- Does math and puts on screen --------*/

function operate() {
    const last = screenNumbers[screenNumbers.length - 1];
    if (last === "*" || last === "/" || last === "-" || last === "+") return;
    isSecondLine = true;
    display.textContent = screenNumbers.join("") + "=";
    //screenNumbers = eeval(screenNumbers, "*");
    screenNumbers = Function("return " + screenNumbers.join(""))();
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
