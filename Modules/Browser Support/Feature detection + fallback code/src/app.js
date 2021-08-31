const button = document.querySelector('button');
const text = document.querySelector('p');

button.addEventListener('click', () => {
  const content = text.textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(content)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  } else {
    alert('Feature not available, please copy manually');
  }
});