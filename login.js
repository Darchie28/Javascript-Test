// Login Validation Function
function validateLogin(username, password) {
if (!username || !password) {
return false; // Missing input check is correct
}
if (username === "admin" && password === "1234") {
return true; // Only valid login credentials are hardcoded
}
return false;
}
// Test Cases
console.log("Login Test 1:", validateLogin("admin", "1234") === true ? "Pass" :
"Fail");
console.log("Login Test 2:", validateLogin("", "1234") === false ? "Pass" :
"Fail");
console.log("Login Test 3:", validateLogin("admin", "") === false ? "Pass" :
"Fail"); // Incorrect expected value
// Missing Tests
// - Invalid username/password combinations
// - Edge cases like long strings or special characters
console.log("Login Test 4: ", validateLogin("user", "pass") === false ? "Pass" :
"Fail");
console.log("Login Test 5: ", validateLogin("admin!", "1234") === false ? "Pass" :
"Fail");
console.log("Login Test 6: ", validateLogin("admin", "wrongpass") === false ? "Pass"
: "Fail");  
console.log("Login Test 7: ", validateLogin("admin!", "1234") === false ? "Pass" : "Fail")