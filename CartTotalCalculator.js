function calculateSubtotal(items) {
    let subtotal = 0;

    for (const item of items){
        subtotal += item.price * item.quantity
    }

    return subtotal
}

function calculateDiscount(subtotal, discountPercent) {
    return subtotal * (discountPercent / 100);
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return amountAfterDiscount * (taxPercent / 100);
}

function createCartSummary(items, discountPercent, taxPercent) {
    let cart = [];

    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const subtotalAfterDiscount = subtotal - discount;
    const tax = calculateTax(subtotalAfterDiscount, taxPercent);
    const subtotalAfterTax = subtotalAfterDiscount + tax;

    cart.push({
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        total: subtotalAfterTax,
    });

    return cart;
}

const cartItems = [
    { name: "Notebook", price: 10, quantity: 2 },
    { name: "Pen", price: 2, quantity: 5 },
    { name: "Bag", price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: "Mouse", price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
