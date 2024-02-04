import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://0.0.0.0:8080/',
    realm: 'myrealm',
    clientId: 'myapp',
});

document.addEventListener('click', async () => {
    //await keycloak.logout();
});

const client = await keycloak.init({ onLoad: 'login-required' });
const response = await fetch('/weather', {
    headers: {
        authorization: `Bearer ${keycloak.token}`,
    },
});
const json = await response.json();

document.querySelector('#weather').innerHTML = JSON.stringify(json, null, 4);
