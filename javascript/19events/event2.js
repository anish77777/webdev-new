/**
 * DEFINITION: Events in JavaScript are actions or occurrences that happen in the system you are programming,
 * which the system tells you about so you can respond to them in some way if desired.
 */

// 1. Example using addEventListener (ael)
/**
 * DEFINITION: addEventListener() is a method that attaches an event handler to an element 
 * without overwriting existing event handlers. It allows multiple handlers for the same event.
 */
const aelBtn = document.getElementById('ael-btn');
aelBtn.addEventListener('click', (e) => {
    console.log('Event (ael) Printed:', e);
    printToUI('addEventListener Clicked!');
});

// 2. Example using onclick property (cl)
/**
 * DEFINITION: .onclick is an event handler property that can be assigned a function.
 * Note: If you assign multiple functions to .onclick, only the last one will be executed.
 */
const clBtn = document.getElementById('cl-btn');
clBtn.onclick = (e) => {
    console.log('Event (cl) Printed:', e);
    printToUI('onclick Property Triggered!');
};

function printToUI(message) {
    const log = document.getElementById('event-log');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
    log.prepend(entry);
    
    // Pulse effect
    entry.style.animation = 'pulse-text 0.5s ease-out';
}
