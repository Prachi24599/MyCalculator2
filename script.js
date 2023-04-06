"use strict";
const input = document.getElementById("input"); // input/output button
const number = document.querySelectorAll(".numbers div"); // number buttons
const operator = document.querySelectorAll(".operators div"); // operator buttons
const result = document.getElementById("result"); // equal button
const clear = document.getElementById("clear"); // clear button
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}
