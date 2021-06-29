const fs = require('fs');
const file = fs.createWriteStream('./big');

for(let i = 0; i <= 1e6; i++) {
    file.write(
        "Parangaricutirimicuaro. Tres tristes tigres tragaban trigo en un trigal. Anita lava la tina, la tina lava anita."
    );
}

file.end();