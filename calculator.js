// Calculator Functions
function add(a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}
function multiply(a, b) {
return a * b;
}
function divide(a, b) {
return a / b;
}
// Test Cases
console.log("Addition Test 1:", add(5, 3) === 8 ? "Pass" : "Fail");
console.log("Subtraction Test 1:", subtract(10, 4) === 6 ? "Pass" : "Fail"); //
// Incorrect expected value
console.log("Multiplication Test 1:", multiply(7, 6) === 42 ? "Pass" : "Fail");
console.log("Division Test 1:", divide(12, 4) === 3 ? "Pass" : "Fail");
// Incomplete Test Cases
// Add tests for edge cases (e.g., division by zero, negative numbers, large
// numbers)
console.log("Division Test 2:", divide(5, 0) === Infinity ? "Pass" : "Fail");
console.log("Division by 0/0 Test:", isNaN(divide(0, 0)) ? "Pass" : "Fail");
console.log("Negative Numbers Test:", add(-5, -3) === -8 ? "Pass" : "Fail");
console.log("Negative Subtraction Test:", subtract(-5, -3) === -2 ? "Pass" : "Fail");
console.log("Large Addition Test:", add(9000, 8000) === 17000 ? "Pass" : "Fail");
// No test for divide by 0 or non-integer inputs