'use strict';

// Elements
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const searchbarEl = document.querySelector('.searchbar');

// Event
buttonEl.addEventListener('click', function () {
  const task = inputEl.value;
  let html = `<div class="bg-slate-200 rounded-full mb-2 flex justify-between items-center cursor-pointer hover:bg-slate-300"><div><input class="form-checkbox rounded-full p-3 border-2 border-teal-800 text-teal-800" type="checkbox"/> ${task}</div><svg class="w-8 h-8 text-gray-700 dark:text-white ease-out duration-100 hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
</svg>
</div>`;
  searchbarEl.insertAdjacentHTML('afterend', html);
  //   pEl.innerHTML = inputEl.value;
});
