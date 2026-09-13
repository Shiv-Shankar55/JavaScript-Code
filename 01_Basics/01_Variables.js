const accountId = 14453
let accountEmail = "shiv@gmail.com"
var accountPassword = "12345" //we are not using "var" in JS
accountCity = "Odisha"
let accountState;

// accountId = 2 //Not allowed bcoz of "const" variable --> "const" variable can't be changed

accountEmail = "sp@gmail.com";
accountPassword = "shiv@123"
accountCity = "Delhi"
/*
    Prefer not to use "var" 
    bcoz of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);