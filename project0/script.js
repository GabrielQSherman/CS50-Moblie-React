const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

setInterval( () => {
  
  mainTitle.style.borderImage = `repeating-linear-gradient(${(Date.now()/222)%360}deg, rgb(255, 0, 0), rgb(255, 160, 51), rgb(235, 255, 51),  rgb(109, 255, 51),  rgb(51, 255, 255),  rgb(116, 51, 255), rgb(197, 51, 255), rgb(255, 51, 170), rgb(255, 51, 102), rgb(255, 51, 51) 170px) 100`;

}, 10)

function newTodo() {

  const task = prompt("What to do, what to do...", "Enter a TODO item.");

  if (task != null) {
    //add one to number tracking values
    itemCountSpan.innerText = parseInt(itemCountSpan.innerText) + 1
    uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1

    //update visual based on updated values
    updateCompletionBar()

      //create elements
          div = document.createElement('div'),

          todoText = document.createElement('p'),

          checkbox = document.createElement('div'),

          deleteBtn = document.createElement('div');
      //set classes
      checkbox.className = classNames.TODO_CHECKBOX
      todoText.className = classNames.TODO_TEXT
      div.className = classNames.TODO_ITEM
      deleteBtn.className = classNames.TODO_DELETE
      //set properties
      todoText.innerText = task;

      checkbox.style.backgroundColor = 'white';
      checkbox.onclick = checkboxClicked;

      deleteBtn.onclick = checkboxDelete;

      div.isChecked = false;
      //append children
      div.appendChild(checkbox)
      div.appendChild(todoText)
      div.appendChild(deleteBtn)

      list.appendChild(div)

  }

}
 
function checkboxClicked () { 
  
  if(this.style.backgroundColor == 'white'){
    this.style.backgroundColor = 'limegreen'
    uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1
    this.parentElement.isChecked = true
  }else{
    this.style.backgroundColor ='white'
    uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1
    this.parentElement.isChecked = false

  }

  updateCompletionBar()

}

function checkboxDelete () {
  
      if (!this.parentElement.isChecked) {
        uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1
      }
      itemCountSpan.innerText = parseInt(itemCountSpan.innerText) - 1

      //update visual once values update
      updateCompletionBar()

      this.parentElement.remove()
}

function updateCompletionBar() {
  const total = parseInt(itemCountSpan.innerText);
  const complete = total - parseInt(uncheckedCountSpan.innerText);
  const percent = Math.round(complete/total * 100);
  const bar = taskPercent;

    bar.style.width = `${percent}%`;
}