const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     // it will not merge it push whole array as single element
// console.log(marvel_heros);


const n1 = marvel_heros.concat(dc_heros)       // it will merge
// console.log(n1);

// merging using spread operator
const n2 = [...marvel_heros, ...dc_heros]
// console.log(n2);

// const depth_array = [12,34,45,65,5,43, [32,23,1,2,4], [4,4,6,7, [4,56,7,7]]]        // 3 nested array (depth of 3)
// const usable_array = depth_array.flat(Infinity)     // infinity means remove all depth into another syntax
// console.log(usable_array);


// string, object to array
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name: "hitesh"}));      // [] --> it does not know whether you need key's array or values array ?

// or
let score1 = 10
let score2 = 11
let score3 = 12
console.log((Array.of(score1, score2, score3)));
