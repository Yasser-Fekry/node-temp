const fs = require('fs')
// Take a Longer time Sync approach
const {readFileSync,writeFileSync} = require('fs')
console.log(`========= Start:\n ========`)
const first = fs.readFileSync('./test2/first.txt', 'utf-8');
const second = fs.readFileSync('./test2/first.txt', 'utf-8');

console.log(first,second)
writeFileSync('./test2/hell.txt', `Hello World: ${first}`,{flag:'a'})
console.log(`======= Done Task ========`)

// First to read file
// Second to write in File
