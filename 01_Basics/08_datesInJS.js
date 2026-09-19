let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 8, 19)
console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2026, 8, 19, 5, 3)
// let myCreatedDate1 = new Date("01-09-2026") // MM-DD-YYYY
let myCreatedDate1 = new Date("2026-01-09") // YYYY-MM-DD
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //Bcoz JScounts months from 0
console.log(newDate.getDay()); //6 --> Saturday

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
    
})