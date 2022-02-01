// nuorodos i el
const btn1 = document.getElementById('btn1');
const result = document.getElementById('result');
const url = 'http://localhost:3000/api/camel';

btn1.addEventListener('click', () => {
  console.log('click');
  // fetch form url and console log
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      if (json.message) {
        result.innerHTML = json.message;
      }
    });
});
