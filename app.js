const orderProcess = require('./DylanChan_WAD.js');

//add items to my shopping cart by id using the .find function and pushing the 
//object into the shopping cart array while also changing the quantity in the inventory
console.log(orderProcess.addOrderByID(4,2));
console.log(orderProcess.addOrderByID(5,3));

//by going through the entire shopping cart using the foreach function it helps me to add all of the value
console.log("Total Price: $" + orderProcess.calculateTotalPrice());

//by using a .find function to find the voucher through the array and 
// subtracting the voucher we can find how much it is after the voucher is used after using the calculate total price function
console.log(orderProcess.applyVoucher('TIMMY20OFF'));

//using .findIndex to find the item's position in the array and using .splice to remove the item we can delete a specific item
console.log("Deleted: " +orderProcess.deleteOrderByID(4));

//by using .foreach we can pass through the shopping cart and empty it out while replacing the stock numbers
console.log(orderProcess.clearCart());