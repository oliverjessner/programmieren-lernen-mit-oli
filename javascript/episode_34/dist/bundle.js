(function () {
    'use strict';

    function smallButton() {
        console.log('This is a small button');
    }

    function table () {
        console.log('table component');
    }

    const str = 'Hello world';

    function main() {
        const input = document.querySelector('input');

        input.value = str;
        smallButton();
        table();
    }
    main();

})();
