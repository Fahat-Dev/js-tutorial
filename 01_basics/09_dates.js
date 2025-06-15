// Date
let date = new Date()
// console.log(typeof date);                      // object
// console.log(date);                      // 2025-06-15T21:47:47.555Z
// console.log(date.toString());           // Sun Jun 15 2025 21:48:31 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString());       // Sun Jun 15 2025
// console.log(date.toTimeString());       // 21:50:15 GMT+0000 (Coordinated Universal Time)
// console.log(date.toLocaleString());     // 6/15/2025, 9:50:15 PM
// console.log(date.toLocaleDateString()); // 6/15/2025
// console.log(date.toLocaleTimeString()); // 9:50:15 PM
// console.log(date.toISOString());        // 2025-06-15T21:50:15.902Z
// console.log(date.toUTCString());        // Sun, 15 Jun 2025 21:50:15 GMT
// console.log(date.getDate());               // 15
// console.log(date.getMonth());              // 5
// console.log(date.getDay());                // 0 (Sunday => 0)
// console.log(date.getFullYear());           // 2025

// let createDate = new Date("06-22-2025")
// let createDate = new Date(2025, 0, 23) // January => 0
// console.log(createDate);        
//  Hence, we usually do (date.getMonth()+1) to avoid displaying 0

// customize date time
let updatedDate = date.toLocaleString('default', {
    weekday: "long"
})
console.log(updatedDate); 
// Time (in milliseconds)