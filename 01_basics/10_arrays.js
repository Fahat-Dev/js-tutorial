// Array 

let arr = ["fahat", "abc", "khan", 'xyz']

// Access values from Array
arr[0] //index value (Starting from 0)

// Another way to declare array
let array = new Array(1,2,3,4)

/* ********************* Array Methods ********************* */
// array.push(5) // add the value at the end
// array.unshift(6) // add the value at the start
// array.pop() // remove the last value
// array.shift() // remove the first value
// console.log(array.includes(9)) // false

// Array -> String
// console.log(typeof array.join()) 

/* ********************* Slice & Splice ********************* */
// console.log("A:", array);

// const n1 = array.slice(1,3)
// console.log("Slice:", n1); //didn't affected original array
// console.log("B:", array);

// const n2 = array.splice(1,3) // include last index as well (3 in this case)
// console.log("Splice:", n2); //removed the values from original array
// console.log("C:", array); 

/* ********************* Concatenation ********************* */
const marvel = ['Spiderman', 'Thor', 'Ironman']
const dc = ['Batman', 'Superman']

// marvel.push(dc) // [ 'Spiderman', 'Thor', 'Ironman', [ 'Batman', 'Superman' ] ]
// console.log(marvel)
// console.log(marvel[3][1]) // to access Superman

// const allHeros = marvel.concat(dc)
// console.log(allHeros)

/* ********************* Spread Operator ********************* */
const allHeros = [...marvel, ...dc]
// console.log(allHeros)

const someArr = [1,2,3,[4,5,[6,7],8],9,[4,5,6]]
const resultArr = someArr.flat(Infinity)
// console.log(resultArr)

// console.log(Array.isArray("fahat"));

let fahat = Array.from("fahat") // [ 'f', 'a', 'h', 'a', 't' ]
// console.log(fahat);
// console.log(Array.isArray(fahat));

fahat = Array.from({name: "fahat"}) // []
// console.log(fahat);

// Number/String -> Array
let score1 = 100
let score2 = 200
let score3 = 300

const scoreArr = Array.of(score1, score2, score3)
console.log(scoreArr);