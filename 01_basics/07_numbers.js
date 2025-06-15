let num = 100

// Another way to declare number
let balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length) 

balance = 23.789
// console.log(balance.toFixed(2))
// console.log(balance.toPrecision(3))

let hundreds = 1000000
console.log(hundreds.toLocaleString());        // 1,000,000 (Default: USA)
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
