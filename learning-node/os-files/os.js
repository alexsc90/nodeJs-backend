const os = require('os');

console.log('CPU info', os.cpus());
console.log('Free memory', os.freemem());
console.log('Type', os.type());
console.log('OS version', os.release());
console.log('User info', os.userInfo());