import Observable from './observable.js';
import Observer from './observer.js';
import InputObserver from './inputObserver.js';

const welcomeText = new Observer('.welcome-message-span');
const postUsername = new Observer('.post-username-span');
const newMessageInput = new InputObserver('.new-message-input');
const usernameObservable = new Observable();
const removePost = document.querySelector('.remove-span');

usernameObservable.subscribe(welcomeText);
usernameObservable.subscribe(postUsername);
usernameObservable.subscribe(newMessageInput);

usernameObservable.autoNotify();

removePost.addEventListener('click', function () {
    const post = document.querySelector('.post');

    post.parentElement.remove(post);
    usernameObservable.unsubsribe(postUsername);
});
