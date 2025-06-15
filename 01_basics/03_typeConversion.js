let score = "33"
// console.log(typeof score)

/* ********************* TO NUMBER ********************* */
// String -> Number
score = "Fahat"
let stringToNum = Number(score)
// console.log(stringToNum) // "33abc" - NaN (Not a Number)

// Undefined -> Number
score = undefined
let undefToNum = Number(score)
// console.log(undefToNum) // NaN (Not a Number)

// Null -> Number
score = null
let nullToNum = Number(score)
// console.log(nullToNum) // 0

// Boolean -> Number
score = true
let boolToNum = Number(score)
// console.log(boolToNum) // 1

/* Convert To Number */
// "33" => 33
// "33abc" => NaN
// undefined => NaN
// null => 0
// True => 1; False => 0

/* ********************* TO BOOLEAN ********************* */
let isLoggedIn = null;
// console.log(isLoggedIn);

let toBool = Boolean(isLoggedIn)
// console.log(toBool);

/* Convert To Boolean */
// "Value" => True
// "" => False
// 0 => False
// undefined => False
// null => False

/* ********************* TO STRING ********************* */
let num = 10;
// console.log(num);

let toString = String(num)
// console.log(toString);

/* ********************* OPERATIONS ********************* */
let num1 = "Hello" 
let num2 = "World!"

let msg = num1 + ' ' + num2;
// console.log(msg);

// console.log(1 + 2);          //3
// console.log("1" + 2);        //12
// console.log(1 + '2');        //12
// console.log('1' + '2');      //12
// console.log(1 + 2 + 2);      //5
// console.log("1" + 2 + 2);    //122 - if 1st val is string, all treated as string
// console.log(2 + 2 + "1");    //41
// console.log("1" + (2 + 2));  //14

/* Prefix & Postfix */
let x = 1
let y = x++ //postfix
console.log(`x:${x}, y:${y}`);
let z = ++x //prefix
console.log(`x:${x}, z:${z}`);