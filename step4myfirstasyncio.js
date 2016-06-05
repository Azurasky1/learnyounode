/* 
GENERAL NODE.JS "NODE"-TAKING ;)
taken from https://github.com/maxogden/art-of-node#callbacks
Node.js - open source project designed to help you write js programs
that talk to networks, file systems, or other i/o (input/ouput, reading/writing) sources.
simple, stable i/o platform that you're encouraged to build modules on top of.

async programming: when the program is run, aill files are immediately defined, but they
don't execute immediately!

parsed - if there are any syntax errors, the program will break.
*/
var fs = require('fs');

var buffer = fs.readFile(process.argv[2], function logNewLines (error, Data) {
if (error) {
 return console.error(error);
 }
 
var str = Data.toString();
str = str.split('\n');
console.log(str.length - 1);
});

// took a little while to figure this one out
// kept getting the error missing ) after argument list
// forgot to close out function parameters
// remember for the future to avoid that mistake!

/*
official solution:

     var fs = require('fs')
     var file = process.argv[2]

     fs.readFile(file, function (err, contents) {
       // fs.readFile(file, 'utf8', callback) can also be used
       var lines = contents.toString().split('\n').length - 1
       console.log(lines)
     })
*/