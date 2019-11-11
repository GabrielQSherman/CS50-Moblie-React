var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var libraryBooksIn = [],
    libraryBooksOut = [];

var fs = require('fs');

var data = fs.readFileSync("books.txt", 'utf8').replace(/\r\n/g, "").split(".");
console.log(data);




rl.close();