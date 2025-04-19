function groupByCategory(items, categoryKey) {
    const grouped = {};

    // Loop through each item in the items array
    for (let item of items) {
        // Get the category value from the current item
        const categoryValue = item[categoryKey];

        // If the category doesn't exist in the grouped object, initialize it as an empty array
        if (!grouped[categoryValue]) {
            grouped[categoryValue] = [];
        }

        // Push the item to the appropriate category array
        grouped[categoryValue].push(item);
    }

    return grouped;
}

// Example usage:
const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'T-Shirt', category: 'Apparel', price: 25 },
    { name: 'Mouse', category: 'Electronics', price: 30 },
    { name: 'Jeans', category: 'Apparel', price: 70 },
];

const grouped = groupByCategory(products, 'category');
console.log(grouped);
