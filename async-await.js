const { readFile } = require('fs');
const getTxt = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

const start = async () => {
    try {
    const first = await getTxt('./test2/hell.txt')
    console.log(first)
    }
    catch (err) {
        console.log(err)
    }
}
start()
// getTxt('./test2/hell.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
