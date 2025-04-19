function processTransactions(transactions) {
    let balance = 0;
    let totalDeposits = 0;
    let totalWithdrawals = 0;

    for (let transaction of transactions) {
        if (transaction.type === 'deposit') {
            balance += transaction.amount;
            totalDeposits += transaction.amount;
        } else if (transaction.type === 'withdrawal') {
            balance -= transaction.amount;
            totalWithdrawals += transaction.amount;
        }
    }

    return {
        finalBalance: balance,
        totalDeposits: totalDeposits,
        totalWithdrawals: totalWithdrawals
    };
}

const transactions = [
    { type: 'deposit', amount: 100 },
    { type: 'withdrawal', amount: 50 },
    { type: 'deposit', amount: 200 },
    { type: 'withdrawal', amount: 75 }
];

const result = processTransactions(transactions);
console.log(result);
