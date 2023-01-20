// function toArray(key){
//     if (key != 'number') console.log("error");
//     screenNumbers.push(key);
//     console.log(screenNumbers);
// }
let screenNumbers = [];
let secondNumber = [];
let operation = "something";
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
reset.addEventListener("click", () => {
    screenNumbers = [];
    display.textContent = "";
    secondNumber = [];
    secondDisplay.textContent = "";
});
equal.addEventListener("click", () => {
    operate(operation, screenNumbers, secondNumber);
    isSecondLine = false;
});
multiply.addEventListener("click", () => {
    if (screenNumbers.length === 0) {
    } else {
        operation = "multiply";
        display.textContent = Number(screenNumbers.join("")) + "*";
        isSecondLine = true;
        display.style.cssText = "opacity: .5;"
    }
});
divide.addEventListener("click", () => {
    if (screenNumbers.length === 0) {
    } else {
        display.style.cssText = "opacity: .5;"
        operation = "divide";
        display.textContent = Number(screenNumbers.join("")) + "/";
        isSecondLine = true;
    }
});
add.addEventListener("click", () => {
    if (screenNumbers.length === 0) {
    } else {
        display.style.cssText = "opacity: .5;"
        operation = "add";
        display.textContent = Number(screenNumbers.join("")) + "+";
        isSecondLine = true;
    }
});
substract.addEventListener("click", () => {
    if (screenNumbers.length === 0) {
    } else {
        display.style.cssText = "opacity: .5;"
        operation = "substract";
        display.textContent = Number(screenNumbers.join("")) + "-";
        isSecondLine = true;
    }
});

function addToDisplay(key) {
    if (isSecondLine === false) {
        screenNumbers.push(key);
        let text = Number(screenNumbers.join(""));
        display.textContent = text;
        secondDisplay.textContent = "";
        secondNumber = [];
        if (screenNumbers.length === 13) {
            secondDisplay.textContent = "oh fuck just dont do it, idk how to repair it,"
            screenNumbers = [];
            secondNumber = [];
        }
    } else if (isSecondLine === true) {
        secondNumber.push(key);
        let text2 = Number(secondNumber.join(""));
        secondDisplay.textContent = text2;
        if (secondNumber.length === 13) {
            secondDisplay.textContent = "oh fuck just dont do it, idk how to repair it"
            secondNumber = [];
            screenNumbers = [];
        }
    }
}

function operate(operation, number1, number2) {
    number1 = Number(number1.join(""));
    number2 = Number(number2.join(""));
    if (operation === "multiply") {
        secondDisplay.textContent = number1 * number2;
        display.textContent = number1 + "*" + number2;
        secondNumber = [];
        screenNumbers = [];
        
    } else if (operation === "divide") {
        if (number2 === 0) {
            secondDisplay.textContent = "ERROR";
            display.textContent = number1 + "/" + number2;
        } else {
            secondDisplay.textContent = number1 / number2;
            display.textContent = number1 + "/" + number2;
        }
    } else if (operation === "add") {
        secondDisplay.textContent = number1 + number2;
        display.textContent = number1 + "+" + number2;
    } else if (operation === "substract") {
        secondDisplay.textContent = number1 - number2;
        display.textContent = number1 + "-" + number2;
    }
}

/*--------------Theme switching -----------*/

const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function () {
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
    } else {
        theme.href = "light-theme.css";
    }
});
