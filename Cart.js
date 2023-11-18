//  basket with product details
let basket = [
    { product: "Leather wallet", unit_price: 1100, gst: 18, quantity: 1 },
    { product: "Umbrella", unit_price: 900, gst: 12, quantity: 4 },
    { product: "Cigarette", unit_price: 200, gst: 28, quantity: 3 },
    { product: "Honey", unit_price: 100, gst: 0, quantity: 2 }
];

// Function to calculate total amount to be paid
function calculateTotalAmount(basket) {
    let totalAmount = 0;

    for (let item of basket) {
        let unitPrice = item.unit_price * item.quantity;
        let gstAmount = (unitPrice * item.gst) / 100;

        // Check if the unit price is Rs. 500 or more to apply the discount
        if (item.unit_price >= 500) {
            totalAmount += (unitPrice + gstAmount) * 0.95;  // Apply 5% discount
        } else {
            totalAmount += unitPrice + gstAmount;  // No discount for products under Rs. 500
        }
    }
    return Math.floor(totalAmount);
}

// Function to identify the product for which maximum GST amount is paid
function findMaxGSTProduct(basket) {
    let maxGSTAmount = 0;
    let maxGSTProduct = null;

    for (let item of basket) {
        let unitPrice = item.unit_price * item.quantity;
        let gstAmount = (unitPrice * item.gst) / 100;

        if (gstAmount > maxGSTAmount) {
            maxGSTAmount = gstAmount;
            maxGSTProduct = item.product;
        }
    }

    return maxGSTProduct;
}

// Calculate and display results
let totalAmountToPay = calculateTotalAmount(basket);
let maxGSTProduct = findMaxGSTProduct(basket);

console.log("Total amount to be paid:", totalAmountToPay);
console.log("Product with maximum GST amount:", maxGSTProduct);
