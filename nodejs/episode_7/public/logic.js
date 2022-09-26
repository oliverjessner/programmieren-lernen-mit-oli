async function get () {
    const response = await fetch('/user', {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

async function post (name) {
    const response = await fetch('/changeUsername', {
        method: 'POST',
        body: JSON.stringify({
            name
        }),
        headers: { 
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

console.log('First GET', await get());
console.log('First POST', await post('berni'));
console.log('Second GET', await get());