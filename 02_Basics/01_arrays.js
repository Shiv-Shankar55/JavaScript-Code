const myArr = [1, 2, 3, 4, 5];
const myHeros = ["IronMan", "Thor"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[0]); //! 1
// console.log(myArr2); //! [ 1, 2, 3, 4 ]

//? Array Methods
// myArr.push(5);
// myArr.push(6);
// myArr.pop(); //! delete the rightmost element

// myArr.unshift(9); //! add the element in arr[0]..
// myArr.shift()

// console.log(myArr.includes(9)); //!  false
// console.log(myArr.indexOf(3)); //! 2

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); //! return 1, 2, 3, 4, 5
// console.log(typeof(newArr)); //! string

//? slice, spice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

// const cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// cars.splice(2, 1, 'ambassedor', 'BMW', 'Audi');
// console.log("cars :", cars);

console.log(dsf);