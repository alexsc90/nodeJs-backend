const myConsole = new console.Console(process.stdout, process.stderr);

myConsole.printInfo = (msg) => {
    console.log('[Info]: %s', msg);
};

myConsole.printWarning = (msg) => {
    console.log('[Warning]: %s', msg);
};

myConsole.printError = (msg) => {
    console.log('[Error]: %s', msg);
};

myConsole.printInfo('Hello, World!');
myConsole.printWarning('This is a warning');
myConsole.printError('Ooops! Something went wrong');