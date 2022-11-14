import Observable from './observable.js';
import Observer from './observer.js';

const welcomeText = new Observer('.welcome-message-span');
const postUsername = new Observer('.post-username-span');
const newMessageInput = new Observer('.new-message-input');
const observable = new Observable();

observable.subscribe(welcomeText);
observable.subscribe(postUsername);
observable.subscribe(newMessageInput);

//observable.notify('oliverjessner');
