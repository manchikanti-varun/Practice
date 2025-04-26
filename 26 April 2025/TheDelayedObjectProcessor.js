function processObjectsDelayed(names, delay){
    for(let i=0;i<names.length;i++){
        setTimeout(() => {
            names[i].process();
        }, delay * i);
    }
}

const items = [
    { name: "Alpha", process: function () { console.log(`Processing: ${this.name}`); } },
    { name: "Beta", process: function () { console.log(`Task for ${this.name} done.`); } },
    { name: "Beta", process: function () { console.log(`Task for ${this.name} done.`); } }
];

processObjectsDelayed(items, 5000);