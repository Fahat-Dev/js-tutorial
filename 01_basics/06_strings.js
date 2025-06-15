// String Interpolation
let name = "Fahat"
let age = 18
// console.log(`Hi, my name is ${name} and I am ${age} years old.`);
// console.log(name.length);


// Another way to declare string
let myName = new String("Fahat")
// console.log(myName[0]);
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.indexOf('t'));
// console.log(myName.charAt(1));

myName = "Fahat-Khan"
// let result = myName.substring(0, 5); // "Fahat" last char doesn't come
let result = myName.slice(0, 4); // "Fahat" takes negative values as well
// console.log(result);

myName = " fahatkhan  "
// console.log(myName.trim()); // remove whitespace from start & end

console.log(myName.includes("k"));

url = "https://example.com/fahat%20khan"
// console.log(url.replace('%20','-')); //https://example.com/fahat-khan

// String -> Array
console.log(url.split('/'));

