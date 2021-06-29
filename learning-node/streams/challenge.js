const { Transform } = require('stream');

function capitalize(string) {
    const array = string.split(' ');
    let finalString = '';
    for(let i = 0; i < array.length; i++) {
        finalString += array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    return finalString;
}

const transformStream = new Transform({
    transform(chunk, encoding, cb) {
        this.push(capitalize(chunk.toString()));
        cb()
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);