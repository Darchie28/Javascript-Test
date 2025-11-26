// Shopping Cart Functions
let cart = [];
function addItem(item, quantity) {
  // Check the quantity first (must be >= 1)
  if (quantity < 1) {
    console.log("Error: Quantity must be at least 1");
    return;
  }
  // Only push the item if the check passes
  cart.push({ item, quantity }); 
}
function removeItem(item) {
cart = cart.filter(cartItem => cartItem.item !== item.toLowerCase()); 
}
function getCartTotal() {
return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
}
// Test Cases
addItem("Apple", 3);
addItem("Banana", 0); // Should throw an error but still adds to cart
removeItem("apple"); // Doesn't remove "Apple" due to case sensitivity
console.log("Cart Total Test 1:", getCartTotal() === 3 ? "Pass" : "Fail"); //
// Fails due to bug
// Missing Tests
// - Adding duplicate items
// Clear cart for new test
cart = []; addItem("Orange", 5); addItem("Orange", 3); 
// Test if the total quantity is correct 
 console.log("Duplicate Item Aggregation Test:", getCartTotal() === 8 ? "Pass" : "Fail");
// - Removing an item not in the cart
cart = []; addItem("Pear", 2); removeItem("Grapes"); console.log("Remove Non-Existent Item Test:", getCartTotal() === 2 ? "Pass" : "Fail");
// - Handling empty cart scenarios
cart = []; console.log("Empty Cart Total Test:", getCartTotal() === 0 ? "Pass" : "Fail");
// Removing all items
cart = []; addItem("Book", 1); removeItem("Book"); console.log("Remove All Items Test:", getCartTotal() === 0 ? "Pass" : "Fail");