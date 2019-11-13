// variable called librayIn and another called librayOut then we will need to import data from a text document that has all of the books that the libray owns.
//then we will need to create a functional interface that allows one to take out books. if we are able to sucessfully take books out of librayIn and transfer them into librayOut then we will allow the user to place them back into the librayIn variable.

var librayIn = [], librayOut = [];

var fileSystem = require('fs');

var books = fileSystem.readFileSync('books.txt', 'utf8');
    books = books.split('.\r\n');
    for (let index = 0; index < books.length; index++) {
        if (books[index].includes(",")) {

        books[index] = books[index].split(',');
        librayIn.push(books[index]);

        }
    }
    

console.log(librayIn);

var readline = require('readline');


