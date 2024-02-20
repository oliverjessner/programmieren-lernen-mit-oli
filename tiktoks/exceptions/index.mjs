import request from 'request';

try {
    request('https://jsonplaceholder.typicode.com/todos/1', function (err, json) {
        console.log(json.json());
    });
} catch (e) {
    console.log(e);
}
