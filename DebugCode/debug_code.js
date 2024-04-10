function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
                let result = multiply(num1, num2);
                let result1 = sum(num1, num2);
                // Display the result
                displayResult(result);
                displayResult1(result1);
            } else {
                displayResult('Please enter valid numbers');
            }

        }

        function multiply(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;

            // Multiply the numbers
            return a * b;
        }

        function sum(a, b) {
            return a + b;
        }


        function displayResult(result) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('result');
            resultElement.textContent = `The result is: ${result}`;
        }

        function displayResult1(result1) {
            const resultElement1 = document.getElementById('result1');
            resultElement1.textContent = `The result is: ${result1}`;
        }
    

