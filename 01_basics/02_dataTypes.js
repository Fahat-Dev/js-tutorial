"use strict" //treat complete file as new version of JS

// alert(3+3) // ReferenceError: alert is not defined

/* ********************* 7 Primitive DataTypes ********************* */
const id = 12; // number
let name = 'fahat'; // string
let isLoggedIn = true; // boolean
let city; // undefined (value is not assigned yet)
let obj = null; //object (standalone value)
// console.log(typeof(obj)) 

// symbol => unique (Refer to 11th file - objects)
const idOne = Symbol('123')
const idTwo = Symbol('123') //symbol
// console.log(idOne === idTwo); //false


// BigInt
const bigInt = 1234839398n //bigint
// console.log(typeof(bigInt)) 

/* ********************* 3 Non-Primitive DataTypes ********************* */
// Arrays
const heros = ["Batman", "Superman", "Spiderman"]
// console.log(typeof heros); //object

// Objects
const hero = {
    id: 1,
    tag: "Batman",
    name: "Fahat",
    age: 18
}
// console.log(typeof hero); //object

// Functions
function myFunc () {
    console.log("Hello World!");
}
// myFunc()
// console.log(typeof myFunc); //function
