function calculateDiscount(price, discountPercent) {
    return discount = price * (discountPercent / 100)
}

function calculateTax(priceAfterDiscount, taxPercent){
    return (priceAfterDiscount * taxPercent) / 100
}

function calculateFinalPrice(price, discountPercent, taxPercent){
    const priceAfterDiscount = price - calculateDiscount(price, discountPercent)
    const priceAfterTax = priceAfterDiscount + calculateTax(priceAfterDiscount, taxPercent)
    return priceAfterTax
}

function createPriceSummary(price, discountPercent, taxPercent){
    const discount = calculateDiscount(price, discountPercent)
    const priceAfterDiscount = price = discount
    const tax = calculateTax(priceAfterDiscount, taxPercent)
    const priceAfterTax = priceAfterDiscount + tax

    return {
        price: price,
        discount: discount,
        tax: tax,
        finalPrice: calculateFinalPrice(price, discountPercent, taxPercent)
    }
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));