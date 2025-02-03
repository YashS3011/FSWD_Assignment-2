let expenses = []

function addExpense(description, amount, date) {
    try {
        if (!description || !amount || !date) {
            throw new Error("Enter all fields");
        }
        expenses.push({ description, amount, date })
        console.log('Expense added:', { description, amount, date });
    } catch (err) {
        console.log(err)
    }
}

addExpense("Breakfast",500,new Date('2025-01-01'))
addExpense("Dinner",1500,new Date('2025-01-02'))
addExpense("Street-food",150,new Date('2024-12-31'))

function totalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

console.log("Total Expense : ",totalExpenses())

function filterByDateRange(startDate, endDate) {
    return expenses.filter(expense => expense.date >= startDate && expense.date <= endDate);
}

const filteredExpenses = filterByDateRange(new Date('2024-12-31'), new Date('2025-01-02'));
console.log('Filtered Expenses:', filteredExpenses);

async function fetchExpenseReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('Expense report fetched successfully!');
            } else {
                reject(new Error('Failed to fetch expense report.'));
            }
        }, 2000);
    });
}

fetchExpenseReport()
.then(console.log)
.catch(console.error)








