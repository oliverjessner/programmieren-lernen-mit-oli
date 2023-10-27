// good
const shortname = 'Oli';
const fullname = 'Oliver';
let i = 0;

function sayHi() {
    console.log(`Hi ${shortname}`);
}

function sayHiFull() {
    console.log(`Hi ${fullname}`);
}

sayHi();
document.addEventListener('click', sayHiFull);
