/*
Name: Tyler Willis
Coursde: JavaScript Programming
Lab Experiment: Simple Calculator and AI Assistance
Date: 10/21/2026
*/


console.log("------ Lab Exercise 6: Simple Calculator ------");

// Collect the input fields and result element
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultElement = document.getElementById("result");

// Collect the four operation buttons
const addButton = document.getElementById("addBtn");
const subtractButton = document.getElementById("subtractBtn");
const multiplyButton = document.getElementById("multiplyBtn");
const divideButton = document.getElementById("divideBtn");


function calculate(operation) {
  if (num1Input.value.trim() === "" || num2Input.value.trim() === "") {
    resultElement.textContent = "Please enter both numbers.";
    return;
  }

  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        resultElement.textContent = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultElement.textContent = "Invalid operation.";
      return;
  }

  resultElement.textContent = String(result);
}

// Add click event listeners to the four buttons
addButton.addEventListener("click", () => calculate("add"));
subtractButton.addEventListener("click", () => calculate("subtract"));
multiplyButton.addEventListener("click", () => calculate("multiply"));
divideButton.addEventListener("click", () => calculate("divide"));

// Add mouseover event listeners to change button colors
addButton.addEventListener("mouseover", () => {
  addButton.style.backgroundColor = "#4CAF50";
});
subtractButton.addEventListener("mouseover", () => {
  subtractButton.style.backgroundColor = "#f44336";
});
multiplyButton.addEventListener("mouseover", () => {
  multiplyButton.style.backgroundColor = "#008CBA";
});
divideButton.addEventListener("mouseover", () => {
  divideButton.style.backgroundColor = "#FF9800";
});

// Add mouseout event listeners to restore button colors
addButton.addEventListener("mouseout", () => {
  addButton.style.backgroundColor = "";
});
subtractButton.addEventListener("mouseout", () => {
  subtractButton.style.backgroundColor = "";
});
multiplyButton.addEventListener("mouseout", () => {
  multiplyButton.style.backgroundColor = "";
});
divideButton.addEventListener("mouseout", () => {
  divideButton.style.backgroundColor = "";
});


/*

Ai helped me understand the part where we had to add mouseout, and mouseover. It debugged the first time I tried it, and I learned from my mistakes.
It also debugged some of my typos in the script.

*/