
// NOTE! On *nix systems, this file needs to be made executable with 'chmod 700 readCommandLineArgs.js' before running it './readCommandLineArgs TestArg'
// On Windows systems, run the file via 'node readCommandLineArgs.js TestArg'
'use strict';

// The command line args are stored in the process.argv array as follows:
// process.argv[0] -> the path of the executable that started the node process
// process.argv[1] -> the path to this application
// process.argv[2..n] -> the command line arguments supplied

// get the first command line argument
const arg1 = process.argv[2];

// Log error to console if command line argument not provided
if(!arg1) {
	let appName = process.argv[1].split(require('path').sep).pop();
	console.error('Missing argument. Example usage: %s YOUR_ARGUMENT', appName);
	process.exit(1);
}

console.log('you provided the command line argument: %s.', arg1);

