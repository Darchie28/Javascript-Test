For the Calcualor.js file, the expected value for the 'Subtraction Test' was inccorrect. I changed it to "console.log("Subtraction Test 1:", subtract(10, 4) === 6 ? "Pass" : "Fail");"
  - There was an incorrect method to handle division by zero in the divide function. I changed the code to "javascript function divide(a, b) { return a / b; }"
  - There was also mission test so I added cases for "Division by Zero Test", "Division by 0/0, "Negative number test for addition and subtraction, and also added "Large number addition"
For the Login.js file there was an error for the Login Test 3, the expected value was change to 'false'.
  - I also added addition tests for 'known bad username/passwor combinations', 'test that contain special characters' confirming they are also rejected.

For the shoppingCart.js file there was a part of code that was outside of the condition check. So I moved 'cart.push'
   - There was an issue with handling hte case sensitivty. I editied the function by converting both the input item and stored cartItem.item to the same case.
