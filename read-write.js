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

// Creae a new file and write in it big file

const {writeFileSync} = require('fs')
for(let i = 0 ; i < 10000; i++){
    writeFileSync('./test2/big.txt', `Hello World ${i}\n`, {flag: 'a'})
}

