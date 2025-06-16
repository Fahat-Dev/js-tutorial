var a = 300
let b = 200
if (true) {
    a = 10
    let b = 20
    // console.log("INNER:", b); 
    const c = 30
}
// console.log(a); // 10
// console.log("OUTER:", b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

/* ********************* Closures ********************* */
function one() {
    const name = "fahat"
    function two() {
        const email = "fahatkhan@gmail.com"
        // console.log(name);
    }
    // console.log(email);
    two()
}
one()

// In simple words, when we have nested functions Child func can access Parent variables but Parent can't access Child's

// Same using if else

if (true) {
    const uname = "Fahat"
    if (uname === "Fahat") {
        const mail = "fahatkhan@gmail.com"
        console.log(uname + " " + mail);
    }
    // console.log(mail);
}
// console.log(uname);
