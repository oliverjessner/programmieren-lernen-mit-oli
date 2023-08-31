/* Q3: Was sind Events in JavaScript */

/*
Events (Ereignisse) in JavaScript sind Aktionen oder Zustandsänderungen, 
die im Browser oder in einer anderen Umgebung auftreten und von deinem 
JavaScript-Code erkannt und behandelt werden können. Events ermöglichen 
es, auf Benutzerinteraktionen oder andere Vorgänge zu reagieren, indem 
sie Funktionen (Event-Handler) auslösen, die in deinem Code definiert sind.
*/
const button = document.querySelector('button');

button.addEventListener('click', function () {
    console.log('I am clicked!');
});
