# Gabriel Sherman CS50 Todo List 

- I started this challenge by using prompt() to get user input and storing that string in a variable

- Then I needed to check if the value is null, meaning nothing was entered, since this mean nothing should happen.

- Because no code should run if the input is null, the conditional check if the prompt response is NOT null.

- Next step was to set up the elements I wanted to append to the DOM with document.createElement()

- I create a div for the todo task row, two sub-divs which will act as buttons. And a paragraph element which will store the task

- Next step was to set properties of these elements and finally append to dom

- Once the elements were in I need to set up event listeners for the buttons and script all the neccecary logic

## Other things I wanted to add in but are just extra and time consuming
    - A progress bar that would reflex the percentage of task checked off
    - A better system to take user input than a prompt 

a prompt was the quickest to implement so that was my first choice

# CS50 Instructions

    Project 0

    The goal of this project is to practice JavaScript and its paradigms by creating
    a TODO app. This app should be able to add TODOs and track the number of total
    TODOs as well as the number of unchecked TODOs.

    Instructions
    Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't
    need to edit this file at all. Open this file on your computer into any browser
    to run the project. Make sure that [script.js](/script.js) and [styles.css](/styles.css)
    are in the same local directory. With the file open in your browser, you should
    see a `New TODO` button, which `alert`s when clicked. Your goal will be to get
    this button to create new TODOs.

    Inside [styles.css](/styles.css), you'll find some pre-written CSS for your
    convenience. You shouldn't need to edit this file at all, but feel free to if
    desired.

    script.js is where most of your work will be done. There is some
    starter code for you in the file. The `classNames` variable can be used to link
    any elements you create in js with the associated CSS class names. The next 3
    lines of code are the HTML elements that you'll need to update when creating new
    TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when
    creating a new TODO. You should replace the `alert()` call with logic to create
    new TODOs.

    Good luck!

    Challenge! (Not Required)
    If you finish early and are up for a challenge, try adding delete functionality.
    This should be in the form of a button within each TODO that removes that TODO
    when clicked. 
