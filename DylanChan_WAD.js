console.log("e-commerce order process");

console.log(module)

let inventory = [
    { id: 1, name: 'notebook', price: 5.99, stock: 100 },
    { id: 2, name: 'pen set', price: 3.50, stock: 150 },
    { id: 3, name: 'water bottle', price: 12.00, stock: 75 },
    { id: 4, name: 'basketball', price: 95.00, stock: 50 },
    { id: 5, name: 'Timmy', price: 4.00, stock: 400 },
];

let shoppingCart = [

];

let voucherCode = [
    {
        id: 1,
        code: 'TIMMY10PERCENT',
        type: 'percentage',
        value: 10.00,
        minSpend: 50.00,
    },
    {
        id: 2,
        code: 'TIMMY20OFF',
        type: 'fixed',
        value: 20.00,
        minSpend: 40.00,
    },
    {
        id: 3,
        code: 'TIMMYLOVES',
        type: 'fixed',
        value: 5.20,
        minSpend: 5.20,
    },
    {
        id: 4,
        code: 'NEWUSER40',
        type: 'percentage',
        value: 4.00,
        minSpend: null,
    },
    {
        id: 5,
        code: 'TIMMYLOVESFREE',
        type: 'percentage',
        value: 100.00,
        minSpend: null,
    }
]


    //1st addOrder function
    //add item to shopping cart
    function addOrderByID(id, quantity) {
        //check if item exists
        let foundItem = inventory.find(item => item.id === id);
        if (!foundItem) {
            console.log("item not found")
            return false;
        } else if (foundItem.stock > quantity) {
            //update new stock quantity
            foundItem.stock = foundItem.stock - quantity,
                console.log("Inventory left:" + foundItem.stock);
            //make object and add it to the shopping cart array
            const newOrder = {
                id: foundItem.id,
                name: foundItem.name,
                price: foundItem.price,
                quantityOrdered: quantity,
                totalPrice: (foundItem.price * quantity).toFixed(2)
            };
            //add new items to orders
            shoppingCart.push(newOrder);
            return newOrder;
        } else if (quantity > foundItem.stock) {
            console.log("There is not enough stock")
            return false;
        } else {
            console.log("There is an error processing your order")
            return false;
        }
    }

    //2nd calculate price function
    function calculateTotalPrice() {
        let cartPrice = 0;
        if (shoppingCart != '') {
            shoppingCart.forEach(item => {
                cartPrice += parseFloat(item.totalPrice);
            });
            return parseFloat(cartPrice.toFixed(2));
        } else {
            return "your shopping cart is empty";
        }
    }


    //3rd using voucher
    function applyVoucher(code) {
        const voucher = voucherCode.find(v => v.code === code);
        const total = this.calculateTotalPrice();

        if (!voucher) {
            return "Voucher code is invalid.";
        }

        // check cart is empty or total is not a number
        if (typeof total !== "number") {
            return "Cannot apply voucher: your cart is empty.";
        }



        // check minSpend
        if (voucher.minSpend !== null && total < voucher.minSpend) {
            return `You must spend at least $${voucher.minSpend.toFixed(2)} to use this voucher.`;
        }

        let discount = 0;
        if (voucher.type === "percentage") {
            discount = (voucher.value / 100) * total;
        } else if (voucher.type === "fixed") {
            discount = voucher.value;
        }
        const discountedTotal = Math.max(0, total - discount);
        return `Original: $${total.toFixed(2)}\nDiscount: -$${discount.toFixed(2)}\nTotal after voucher: $${discountedTotal.toFixed(2)}`;
    }

    //4th delete order using id function
    function deleteOrderByID(id) {
        let wannaDelete = shoppingCart.findIndex(item => item.id === id);
        if (wannaDelete < -1 || wannaDelete >= shoppingCart.length) {
            console.log("item not found");
            return false;
        } else {
            const itemToDelete = shoppingCart[wannaDelete]
            shoppingCart.splice(wannaDelete, 1)
            return JSON.stringify(itemToDelete);
        }
    }

    //5th clear cart function
    function clearCart() {
        shoppingCart.forEach(cartItem => {
            const inventoryItem = inventory.find(item => item.id === cartItem.id);
            if (inventoryItem) {
                inventoryItem.stock += cartItem.quantityOrdered;
            }
        });

        shoppingCart.length = 0;
        return "Cart has been cleared and stock restored.";
    }


module.exports = {
    addOrderByID,
    calculateTotalPrice,
    applyVoucher,
    deleteOrderByID,
    clearCart
};
