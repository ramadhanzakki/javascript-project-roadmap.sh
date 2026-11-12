function calculateTotal(expenses){
    let amountTotal = 0

    for (const expense of expenses){
        amountTotal += expense.amount
    }

    return amountTotal
}

function calculateCategoryTotal(expenses, category){
    let amountTotal = 0

    for (const expense of expenses) {
        if (expense.category === category) {
            amountTotal += expense.amount
        }
    }

    return amountTotal
}

function findLargestExpense(expense){
    if (expenses.length === 0) {
        return null
    }

    let largeExpense = expenses[0]

    for (const expense of expenses) {
        if (expense.amount > largeExpense.amount) {
            largeExpense = expense
        }
    }

    return largeExpense
}

function createExpenseSummary(expenses){
    const totalExpense = calculateTotal(expenses)
    const foodTotal = calculateCategoryTotal(expenses, 'food')
    const transportTotal = calculateCategoryTotal(expenses, 'transport')
    const largestExpense = findLargestExpense(expenses)

    return {
        total: totalExpense,
        foodTotal: foodTotal,
        transportTotal: transportTotal,
        largestExpense: largestExpense
    }
}

const expenses = [
    { id: 1, category: 'food', amount: 24 },
    { id: 2, category: 'transport', amount: 15 },
    { id: 3, category: 'food', amount: 18 },
    { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));