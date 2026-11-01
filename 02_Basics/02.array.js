const marvel_heroes = ["IronMan", "Thor", "SpiderMan"];
const dc_heroes = ["SuperMan", "Flash", "BatMan"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //! [ 'IronMan', 'Thor', 'SpiderMan', ['SuperMan', 'Flash', 'BatMan' ]]

// console.log(marvel_heroes[2]); //! SpiderMan
// console.log(marvel_heroes[3]); //! [ 'SuperMan', 'Flash', 'BatMan' ]
// console.log(marvel_heroes[3][2]); //! BatMan

// const allHeros = marvel_heroes.concat(dc_heroes)
// console.log(allHeros); //! [ 'IronMan', 'Thor', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

const all_new_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heros); //! [ 'IronMan', 'Thor', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

const another_array = [1, 2, 3, [4, 5 , 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity); //! How many depth you want to solve ||| Infinity : it solves all depth array
console.log(real_another_array);


console.log(Array.isArray("Shiv")); //! False
console.log(Array.from("Shiv")); //! [ 'S', 'h', 'i', 'v' ]
console.log(Array.from({name : "Shiv"})); //! [] -> Empty Array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //! [ 100, 200, 300 ]


//? Array.of : Creates an array from set of elements.
//? Array.from : Creates an array from iterzble object --> "Shiv" -> ["S", "h", "i", "v"]
