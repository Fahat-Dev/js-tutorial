const id = "123"
let email = "fahat@gmail.com"
var pwd = "fahatkhan123"
city = "Mumbai"

let state;

// console.log(id, email, pwd, city)

// console.log(typeof(city)) - // string

/* Reassigning Values */

// id = 12
// console.log(id) // TypeError: Assignment to constant variable.
email = "fahatkhan@gmail.com"
pwd = "fahat123"
city = "Delhi"

// Table:
console.table([id, email, pwd, city, state])
