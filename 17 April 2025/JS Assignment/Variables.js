// Global Scope
var globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);
}
showGlobal();

function localScopeExample() {
    var localVar = "I am local";
    console.log(localVar);
}
localScopeExample();
// console.log(localVar); // ReferenceError

function blockScopeExample() {
    if (true) {
        let blockLet = "I am block-scoped";
        const blockConst = "I am also block-scoped";
        console.log(blockLet);
        console.log(blockConst);
    }
    // console.log(blockLet); // ReferenceError
    // console.log(blockConst); // ReferenceError
}

blockScopeExample();

var shadowVar = "Global Shadow";

function shadowingExample() {
    var shadowVar = "Local Shadow";
    console.log(shadowVar);
}

shadowingExample();
console.log(shadowVar);

let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);
