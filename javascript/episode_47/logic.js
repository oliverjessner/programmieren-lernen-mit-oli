const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
const record = document.querySelector('button');
const text = document.querySelector('p span');
let isRecording = false;
const grammar =
    '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;';

function recording() {
    record.textContent = 'Stop recording';
    recognition.continuous = true;
    recognition.lang = 'de-DE';
    recognition.start();
    recognition.addEventListener('result', function (event) {
        const trans = Array.from(event.results)
            .map(r => r[0])
            .map(r => r.transcript)
            .join('');

        text.innerText = trans;
    });

    isRecording = true;
}

function stopRecording() {
    record.textContent = 'Start recording';
    recognition.stop();

    isRecording = false;
}

record.addEventListener('click', function () {
    if (isRecording) {
        return stopRecording();
    }

    return recording();
});
