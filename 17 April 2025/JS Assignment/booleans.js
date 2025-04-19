function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense === true) {
        return "Eligible to drive";
    }
    if (obj.temperature > 30 || obj.humidity > 70) {
        return "Warning: High discomfort level";
    }
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive === true) {
        return "Access granted";
    }
    if (obj.age < 18 && !obj.hasLicense) {
        return "Not eligible for driving";
    }
    if (obj.isRaining === true && obj.temperature < 10) {
        return "Warning: Cold and rainy";
    }
    if (obj.isLoggedIn && !obj.isActive) {
        return "User logged in but inactive";
    }
    return "No conditions met";
}

const user1 = {
    age: 20,
    hasLicense: true,
    temperature: 35,
    humidity: 60,
    role: "admin",
    isActive: true,
    isRaining: false,
    isLoggedIn: true
};

console.log(evaluateConditions(user1));

const user2 = {
    age: 15,
    hasLicense: false,
    temperature: 32,
    humidity: 75,
    role: "guest",
    isActive: false,
    isRaining: true,
    isLoggedIn: false
};

console.log(evaluateConditions(user2));
