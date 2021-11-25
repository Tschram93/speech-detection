// Selectors
const words = document.querySelector('.words');

// Establishing new variables
let p = document.createElement('p'); //Creates new `p` tags in html

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// uses and functions
recognition.interimResults = true;
recognition.continuous = true;
words.appendChild(p);


// Event Listeners
recognition.addEventListener('result', (e) => {
    console.log(e.results);
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

    console.log(transcript);

});
recognition.start();