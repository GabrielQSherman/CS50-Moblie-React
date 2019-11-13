var fileSystem = require('fs');

var books = fileSystem.readFileSync("books.txt", "utf8").split(".\r\n");


var librayin = [],
librayout =[];


for (var i = 0; i < books.length; i++){
    books[i] = books[i].replace(/\r\n/g, '');
    if ( books[i].includes(',')) {
        books[i] = books[i].split(',');
        librayin.push(books[i][0]);
        
        


    }

}

console.log("Books Availble:\n");

for (let i = 0; i < librayin.length; i++) {
console.log(i+1 + ": " +  librayin[i]);    
}


var readline = require('readline'),
    readLineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });




readLineInterface.question("Select a book number of a book would you like to take out?\n", (answer) => {
    answer = parseInt(answer);
    for (let i = 0; i < librayin.length; i++) {

            
        if (answer === i + 1 ) {
            console.log("You have choosen",librayin[i] );
            
        }

        
    }   

readLineInterface.close();
})




    

// console.log(librayin);
