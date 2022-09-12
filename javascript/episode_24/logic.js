'use strict';
const address = 'https://jsonplaceholder.typicode.com/';

const postsProm = fetch(`${address}posts/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json());
const commentsProm = fetch(`comments/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json());

Promise.allSettled([postsProm, commentsProm]).then(function (responses) {
    console.log(responses);
    return responses.filter(d => d.status === 'fulfilled').map(d => d.value)
}).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});