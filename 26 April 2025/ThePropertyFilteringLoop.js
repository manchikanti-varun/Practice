function filterObjectProperties(obj, minLength){
    let filterObj={};
    for(let val in obj){
        if(typeof obj[val]==='string' && obj[val].length>=minLength){
            filterObj[val]=obj[val];
        }
    }
    return filterObj;
}
const data = { a: "short", b: "longer string", c: 123, d: "very long string indeed" };
const filtered = filterObjectProperties(data, 6);
console.log(filtered); // Expected output: { b: 'longer string', d: 'very long string indeed' }
