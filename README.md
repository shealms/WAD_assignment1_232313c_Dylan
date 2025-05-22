# Assignment 1

This is my node.js module with reference to Shoppee an e-commerce website where users can buy things and some of my function includes adding items to shopping carts, tallying up the price of my shopping cart, applying vouchers, deleting items and clearing my shopping cart

# usage
const orderProcess = require('./DylanChan_WAD.js');

```javascript
const orderProcess = require('./DylanChan_WAD.js');

// Add items to shopping cart by ID and update inventory quantity
console.log(orderProcess.addOrderByID(4, 2));
console.log(orderProcess.addOrderByID(5, 3));

// Calculate total price of items in the cart
console.log("Total Price: $" + orderProcess.calculateTotalPrice());

// Apply voucher code to get a discount
console.log(orderProcess.applyVoucher('TIMMY20OFF'));

// Delete a specific item from the cart by ID
console.log("Deleted: " + orderProcess.deleteOrderByID(4));

// Clear the cart and restock the items
console.log(orderProcess.clearCart());

# References
https://shopee.sg/