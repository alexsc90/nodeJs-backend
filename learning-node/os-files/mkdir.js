const fs = require('fs');

fs.mkdir('node_backend/learning/fs', { recursive: true }, (err) => {
    if(err) {
        console.log(err);
    }
})