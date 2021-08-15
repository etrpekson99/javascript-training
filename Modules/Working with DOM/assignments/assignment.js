// 1
const selectTask1ByID = document.getElementById('task-1');
const selectTask1ByCSSID = document.querySelector('#task-1');

selectTask1ByID.style.backgroundColor = 'black';
selectTask1ByID.style.color = 'white';

selectTask1ByCSSID.style.backgroundColor = 'black';
selectTask1ByCSSID.style.color = 'white';

// 2
const title = document.querySelector('title');
title.textContent = 'Assignment solved';

const getTitle = document.querySelector('html head title');
getTitle.textContent = 'Assignment solved!'

const docHead = document.head;
const docTitle = docHead.querySelector('title');
docTitle.textContent = 'Assignmend solved';

// 3
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - solved!'