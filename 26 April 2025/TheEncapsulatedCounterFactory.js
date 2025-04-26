function createUniqueCounter(){
    let counter=0;

    function increment(){
        counter++;
        return counter;
    }
    function getValue(){
        return counter;
    }

    return{increment,getValue};
}

const funexp = createUniqueCounter();

console.log(funexp.increment());
console.log(funexp.getValue());
console.log(funexp.increment());