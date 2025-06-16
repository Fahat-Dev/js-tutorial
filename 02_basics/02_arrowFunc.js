/* ********************* Hoisting ********************* */
add(5)
function add(n) {
    return n+1
}

// addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(n) {
    return n+2
}

// 

const user = {
    id: 1,
    name: "Fahat",
    welcomeMessage: function() {
        // console.log(`hi, ${this.name}`)
        // console.log(this); //context of the object "user"
    }
}
user.welcomeMessage()
// user.name = "faddy"
// user.welcomeMessage()

// console.log(this); // {} empty obj - since we are in Node
// Note: In browser this object is window

// Ways to define function
function funcName(params) {}
const funcName1 = function(params) {}
const funcName2 = (params) => {}         

// arrow

const addN = (n1, n2) => n1 + n2 
console.log(addN(3, 5));

// Implicit Return () => ()
// Explicit Return () => { return }
