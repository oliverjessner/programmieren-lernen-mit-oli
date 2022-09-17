const response = await fetch(`comments/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});
const json = await response.json();
console.log('hi');
console.log(json);