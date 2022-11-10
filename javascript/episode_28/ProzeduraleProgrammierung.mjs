function d() {
    a();
}

function a() {
    console.log('Ich hab den anschluss verloren');
}

function b() {
    d();
}

function c() {
    b();
}

c();
