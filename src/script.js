'use strict';

// Elements
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('.form-input');
const mainBox = document.querySelector('.main-box');

// Functions
const addTask = function () {
  const task = inputEl.value;
  // Add ul
  const ul = document.createElement('ul');
  ul.classList.add('task-box');
  mainBox.appendChild(ul);

  // Add li
  const li = document.createElement('li');
  li.classList.add('list-box');
  ul.appendChild(li);

  // Add input(checkbox)
  const input = document.createElement('input');
  input.classList.add('form-checkbox');
  input.setAttribute('type', 'checkbox');
  li.appendChild(input);

  // Add span
  const span = document.createElement('span');
  span.classList.add('line-animate');
  span.innerText = task;
  li.appendChild(span);

  // Add close
  const close = document.createElement('span');
  close.classList.add('close');
  li.appendChild(close);
  close.innerHTML = '&#x2715;';

  inputEl.value = '';
};

// Events
buttonEl.addEventListener('click', addTask);
