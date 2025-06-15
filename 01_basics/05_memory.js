/* ********************* MEMORY ********************* */
// Primitive (Stack), Non-Primitive (Heap)

let fullName = "Fahat"
let nickName = fullName
nickName = "Faddy"
// console.log(fullName);
// console.log(nickName);

let userOne = {
    id: 1, name: "Fahat"
}
userTwo.name = "Faddy"
// console.log(userOne.name)
// console.log(userTwo.name)

let userOne = [ "Fahat",  "Khan"]
let userTwo = userOne
userTwo[0] = "Faddy"