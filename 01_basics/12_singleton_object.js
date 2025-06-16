const user = new Object()

user.name = "fahat"
user.age = 18
user.isLoggedIn = false
// console.log(user);

const details = {
    id: 1,
    user: {
        fullname: {
            fname: "fahat",
            lname: "khan"
        }
    }
}
// console.log(details.user.fullname.fname);

/* ********************* Optional Chaining ********************* */
// console.log(details.user?.fullname?.fname); //adds validation to check if value exists


/* ********************* Object Methods ********************* */

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

const obj3 = {obj1, obj2}
// console.log(obj3);

// Same as Concatenation
// console.log(Object.assign(obj1, obj2));

/* ********************* Spread Operator ********************* */
const obj4 = {...obj1, ...obj2}
// console.log(obj4);


/* ********************* Array of Objects ********************* */
const data = [
    {
        id: 1,
        language: "Hindi"
    },
    {
        id: 2,
        language: "English"
    },
    {
        id: 3,
        language: "Marathi"
    }
]

// console.log(data[0].language);

// Extract keys & values from objects
// console.log(Object.keys(user)); // [ 'name', 'age', 'isLoggedIn' ]
// console.log(Object.values(user)); // [ 'fahat', 18, false ]

/* ********************* Object Destructuring ********************* */
const courseDetails = {
    id: 1,
    name: 'IoT',
    price: 499,
}

// console.log(courseDetails.price);
// console.log(courseDetails.name);
// console.log(courseDetails.id);
const {price, name, id} = courseDetails
console.log(price, name, id);
