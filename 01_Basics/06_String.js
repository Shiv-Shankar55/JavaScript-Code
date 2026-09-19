const name = "Shiv"
const repoCount  = 3

// console.log(name + repoCount + " Value");
console.log(`Hi my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('sibasankar')
// console.log(gameName[0]); // return 0 index value
// console.log(gameName.__proto__);

// console.log(gameName.length); // calculate length
// console.log(gameName.toLowerCase()); //convert all to lowercase
// console.log(gameName.charAt(2)); //return index value
// console.log(gameName.indexOf('G')); //return index

const newString = gameName.substring(0, 3) //return 0 to 2(3-1) index value
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString); 

const newStringOne = "    shiv       "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim all the forward/backward spaces

const url = "https://shiv.com/shiv%20shankar"

console.log(url.replace('%20', '-')); //replace '%20' to '-'
console.log(url.includes('shiv')); //if 'shiv' present --> true

console.log(gameNmeTwo.split('-')); //Split into array according to '-'