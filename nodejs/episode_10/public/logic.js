const socket = io();
const sendBttn = document.querySelector('button');
const textarea = document.querySelector('textarea'); // message is written
const usernameTextbox = document.querySelector('input');
const chatWindow = document.querySelector('div');

socket.on('message', function (msg) {
    const item = document.createElement('p');

    item.textContent = `${msg.username} - ${msg.text}`;

    chatWindow.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

sendBttn.addEventListener('click', function () {
    const text = textarea.value;
    const username = usernameTextbox.value;

    textarea.value = '';
    socket.emit('message', { text, username });
});
