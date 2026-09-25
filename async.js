const { readFile, writeFile } = require('fs');
// ASync Approach
readFile('./test2/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  writeFile('./test2/hell.txt',`Hello World: ${first}`, { flag: 'a' },
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('File written successfully');
    }
  );
});

console.log(`Run New Task`)
