// Declaration
// function print() {
//     console.log("Hello World!");
// }
// print()

// function addNum(n1, n2) {
//     console.log(n1+n2); //7
// }
// const result = addNum(3,4)
// console.log(result); //undefined - because we didn't return the value

function onSuccessfulLogin(uname) {
    if (!uname) { // If uname is undefined, null, 0, NaN, "", false, then !uname evaluates to true.
        return "Please enter a username"
    }
    return `Hello ${uname}!`
}

// console.log(onSuccessfulLogin("Fahat")); // Hello Fahat!
// console.log(onSuccessfulLogin(""));      // Hello !
// console.log(onSuccessfulLogin());           // Hello undefined!


/* ********************* Rest/Spread Operator ********************* */
function cartValue(val1, val2, ...n1) {
    return n1 // [ 100, 200, 300 ]
}
// console.log(cartValue(100, 200, 300, 500));

function handleObj(anyObj) {
    return `Hi, my name is ${anyObj.name}`
}
// console.log(handleObj({
//     id: 1,
//     name: 'Fahat'
// }));

function handleArr(anyArr) {
    return `The first value of array is ${anyArr[0]}`
}
console.log(handleArr(["100", "200"]));

