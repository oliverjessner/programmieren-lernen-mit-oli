const request = await fetch('https://waifu.im/random/', {
    method: 'GET',
});
const jsonData = await request.json();

console.log(jsonData);