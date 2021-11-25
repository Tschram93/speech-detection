// Selectors
const words = document.querySelector('.words');

// Establishing new variables
let p = document.createElement('p'); //Creates new `p` tags in html
const recognition = new SpeechRecognition();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// uses and functions
recognition.interimResults = true;
words.appendChild(p);


// Event Listeners
recognition.addEventListener('results', (e) => {
    console.log(e);

});