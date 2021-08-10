const task3Element = document.getElementById('task-3');

function alertText() {
    alert('text');
}

function alertName(name) {
    alert(name);
}

function alertThreeStrings(string1, string2, string3) {
    alert(`${string1} ${string2} ${string3}`);
}

alertName('Elijah');
alertThreeStrings('Hello', 'it\'s', 'me');

task3Element.addEventListener('click', alertText);

