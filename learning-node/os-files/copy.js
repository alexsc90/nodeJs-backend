const fs = require('fs');

fs.copyFile('eenie-meenie.txt', 'De tin marin', err => {
    if(err) {
        console.log(err);
    }

    console.log('eenie-meenie has been copied into De tin marin')
})