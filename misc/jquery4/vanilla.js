var hiddenBox = document.getElementById('hidden-box');

document
    .getElementById('button-container')
    .getElementByTagName('button')
    .addEventListener('click', function () {
        hiddenBox.show();
    });
