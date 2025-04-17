/*Question: Create a function formatCurrency(amount, currencyCode) that takes a numerical amount and a currencyCode 
(e.g., 'USD', 'EUR', 'INR'). The function should return a formatted string representing the currency. Implement logic 
to handle different currency formats (e.g., placing the symbol before or after the amount, using commas for thousands 
separators, and handling decimal places appropriately). You might need to research the common formatting conventions 
for different currencies.*/

function formatCurrency(amount, currencyCode = 'INR') {
    let locale;

    if (currencyCode === 'USD') {
        locale = 'en-US';
    } else if (currencyCode === 'EUR') {
        locale = 'de-DE';
    } else if (currencyCode === 'JPY') {
        locale = 'ja-JP';
    } else if (currencyCode === 'GBP') {
        locale = 'en-GB';
    } else if (currencyCode === 'INR') {
        locale = 'en-IN';
    } else {
        locale = 'en-IN';
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
    }).format(amount);
}

console.log(formatCurrency(123456789));
console.log(formatCurrency(123456789, 'USD'));
console.log(formatCurrency(123456789, 'EUR'));
console.log(formatCurrency(123456789, 'JPY'));
console.log(formatCurrency(123456789, 'GBP'));    
