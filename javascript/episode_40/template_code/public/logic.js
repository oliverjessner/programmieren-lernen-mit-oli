const button = document.querySelector('button');

button.addEventListener('click', function () {
    // following things are drawn from the DOM
    const text = document.querySelector('#text').value;
    const date = document.querySelector('#date').value;
    const color = [...document.querySelectorAll('.colors input[type="radio"]')].find(c => c.checked).value;
    const urgency = document.querySelector('#urgency').value;
});
