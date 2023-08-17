const rawURL = window.location.href;
const parameterPart = new URL(rawURL).search;
const searchParams = new URLSearchParams(parameterPart);
console.log(searchParams);

for (const key of searchParams.keys()) {
    console.log(key);
}

for (const value of searchParams.values()) {
    console.log(value);
}

for (const [key, value] of searchParams.entries()) {
    console.log(key, value);
}

//console.log(searchParams.getAll('topic'));
console.log(searchParams.get('topic'));

if (!searchParams.has('mode')) {
    searchParams.append('mode', 'dark');
    console.log(searchParams);
    console.log(searchParams.toString());

    location.search = searchParams.toString();
}
