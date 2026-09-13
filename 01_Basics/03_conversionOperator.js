let score = "33";

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)


let score1 = "33abc";

console.log(typeof score1)
console.log(typeof(score1))

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1)

//----Conversion--------
//number --> "33" => 33
//string --> "33abc" => NaN
//boolean --> true => 1; false => 0

let isLoggedIn = "shiv"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//----Conversion--------
// 1 => true; 0 => false
// ""  => false
// "shiv" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

