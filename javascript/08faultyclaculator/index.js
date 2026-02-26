// Create a faulty calculator using object and eval

let obj = {
  "+": "-", // Addition becomes Subtraction
  "-": "+", // Subtraction becomes Addition
  "*": "/", // Multiplication becomes Division
  "/": "**", // Division becomes Exponent
  "**": "*", // Exponent becomes Multiplication
};

function calculate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operator = document.getElementById("operator").value;
  let resultDiv = document.getElementById("result");

  // Validate inputs
  if (num1 === "" || num2 === "") {
    resultDiv.style.color = "#ff6b6b";
    resultDiv.textContent = "❌ Please enter both numbers!";
    return;
  }

  // Convert to numbers
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Get faulty operator from object
  let faultyOperator = obj[operator];

  // Create expression and use eval
  let expression = num1 + " " + faultyOperator + " " + num2;
  let result = eval(expression);

  // Display result with warning
  resultDiv.style.color = "#667eea";
  resultDiv.innerHTML = `
    <div>
      <p>Expression: <strong>${num1} ${faultyOperator} ${num2}</strong></p>
      <p>Result: <strong>${result}</strong></p>
    </div>
  `;
}
