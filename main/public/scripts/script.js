// Selectors
const words = document.querySelector('.words');

// Establishing new variables
let p = document.createElement('p'); //Creates new `p` tags in html

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// uses and functions
recognition.interimResults = true;

// recognition.continuous = true;
words.appendChild(p);


// Event Listeners

// Start Event
recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    console.log(transcript);

});
// End Event 
recognition.addEventListener('end', recognition.start);
recognition.start();