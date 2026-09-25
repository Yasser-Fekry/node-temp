


const path = require('path');

// Show the platform-specific path separator
console.log(path.sep); // '/' on Linux/Mac, '\' on Windows

// Join path segments into one path
const filePath = path.join('/test/', 'test.txt');
console.log(filePath); // /test/test.txt

// Get just the file name from a path
const base = path.basename(filePath);
console.log(base); // test.txt

// path.resolve() returns an absolute path,
// resolving segments right-to-left until an absolute path is built
const absolute = path.resolve(__dirname, 'test', 'test.txt');
console.log(absolute); // e.g. /home/user/project/test/test.txt
