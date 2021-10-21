'use strict;';
//get elemnts
const inputEl = document.querySelector('.todo-text');
const submitBtnEl = document.querySelector('.todo-btn');
const listContainerEl = document.querySelector('.list');

// event listener
submitBtnEl.addEventListener('click', addItem);
listContainerEl.addEventListener('click', deleteItem);

//functions
function addItem(event) {
  event.preventDefault();
  const divEl = document.createElement('div');
  divEl.classList.add('todo');
  listContainerEl.appendChild(divEl);

  const listEl = document.createElement('li');
  listEl.classList.add('todo-item');
  divEl.appendChild(listEl);

  const completedBtnEl = document.createElement('button');
  completedBtnEl.innerHTML = `<i class="fas fa-check fa-3x"></i>`;
  completedBtnEl.classList.add('complete-btn');
  divEl.appendChild(completedBtnEl);

  const deleteBtnEl = document.createElement('button');
  deleteBtnEl.innerHTML = `<i class="fas fa-trash fa-3x"></i>`;
  deleteBtnEl.classList.add('delete-btn');
  divEl.appendChild(deleteBtnEl);

  listEl.innerText = inputEl.value;
  inputEl.value = '';
}
// delete function
function deleteItem(event) {
  const item = event.target;
  if (item.classList[0] === 'delete-btn') {
    console.log('hi');
    const todo = item.parentElement;
    // todo.classList.add('fall');
    // todo.addEventListener('transitionend', event => {
    //   todo.remove();
    // });
    todo.remove();
  }
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
