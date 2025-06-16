// singleton - Constructors

// Symbol
const sym = Symbol("Key1")

// object literal
const obj = {
    "full name": "Fahat Khan",
    fname: "Fahat",
    age: 18,
    city: 'Mumbai',
    isLoggedIn: true,
    subjects: ['English', 'Hindi', 'Marathi'],
    [sym]: "my Key"
}
// console.log(obj);
// console.log(typeof obj.sym);
// console.log(obj[sym]);

// 2 ways to access values from objects
// console.log(obj.fname);
// console.log(obj["full name"]);

// How to change any value?
obj.fname = "Fahad"
// Object.freeze(obj)
// obj.fname = "Faddy"
// console.log(obj);

obj.greeting = function(){
    console.log("Hello World!");
}
// console.log(obj.greeting());

obj.greetingTwo = function(){
    console.log(`Hello ${this.fname}!`);
}
console.log(obj.greetingTwo());
