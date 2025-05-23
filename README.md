# Assignment 1

This is my node.js module with reference to Shoppee an e-commerce website where users can buy things and some of my function includes adding items to shopping carts, tallying up the price of my shopping cart, applying vouchers, deleting items and clearing my shopping cart


# module references
Arrays 
```javascript
inventory
```
This array simulate a item that is listed on the Shoppee app that is ready to be sold

- ``` id ``` (Number) : unique identifier
- ``` name ```(String): Name of the item
- ``` price``` (Number): price of the item
- ``` stock``` (Stock): Amount of items left in the inventory


``` shopping cart```
This array simulates your shopping cart which can be used to add items that you would like to purchase which is currently empty but would be formatted like this
```javascript 
id:
name:
price:
quantityOrdered:
totalPrice:
```

``` voucherCode```
This would store the voucher codes that user would be able to use by typing in the corrrect code which would grant them the voucher this code would include
```javascript 
    id: 1,
    code: 'TIMMY10PERCENT',
    type: 'percentage',
    value: 10.00,
    minSpend: 50.00,
```



# usage
const orderProcess = require('./DylanChan_WAD.js');

```javascript
const orderProcess = require('./DylanChan_WAD.js');

// Add items to shopping cart by ID and update inventory quantity
//also deducts item quantity from the inventory and  checks if there is enough stock available through error handling
console.log(orderProcess.addOrderByID(4, 2));
console.log(orderProcess.addOrderByID(5, 3));

// Calculate total price of items
// By using a forEach loop to loop through every item price and adding them up
console.log("Total Price: $" + orderProcess.calculateTotalPrice());

// Apply voucher code to get a discount
//By keying is the correct voucher code that was stored in the array above it checks if the voucher exists and also other things like if the cart is empty or if the minimum spending requirements are hit and then they will procede to use the voucher which they will specify if it is either  a percentage type voucher or a fixed amount type
console.log(orderProcess.applyVoucher('TIMMY20OFF'));

// Delete a specific item from the cart by ID
//by using the findIndex function to determine the position of the item that i suppose to be deleted in the array followed by the splice function we can find out and remove the specific item
console.log("Deleted: " + orderProcess.deleteOrderByID(4));

// Clear the cart and restock the items
// using a foreach function for every item in the shopping cart it uses its id to find the item and returns it to the inventory stock when the function is runned
console.log(orderProcess.clearCart());
```

# References
https://shopee.sg/