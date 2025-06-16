// Immediately Invoked Function Expressions (IIFE)

// Eg: Database Connection (Immediately Executing a Function as soon as app starts)

// Avoid global scope pollution as value is declared globally and can pollute other variable in the scope

(function connect(){
    console.log('DB Connected');
})();

((uname) => {
    console.log(`DB Connected Two ${uname}`);
})("fahat")

// 1st () for => Function Declaration
// 2nd () for => Function Execution/Call