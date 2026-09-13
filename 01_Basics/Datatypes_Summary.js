// Primitive

// 7 types --> String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 123214585256963n //BigInt

//Reference (Non - primitive)

// Array, Objects, Functions

const heros = ["iron-man", "hulk", "spider-man"];
let myObj = {
    name: "shiv",
    age: 19,
}
// console.log(myObj);


const myFunc = function() {
    console.log("Hello World"); //typeof --> function
    
}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ****************************************************

// Stack (Primitive), Heap (Non - Primitive)

let myName = "Sibasankar"

let myAlternateName = myName
myAlternateName = "Gugul"

console.log(myName);
console.log(myAlternateName);

let userOne = {
    email: "email@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "shiv@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

