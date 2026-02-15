// Hex Visualizer Engine
const hexInput = document.getElementById('hex-input');
const rHex = document.getElementById('r-hex');
const gHex = document.getElementById('g-hex');
const bHex = document.getElementById('b-hex');
const rDec = document.getElementById('r-dec');
const gDec = document.getElementById('g-dec');
const bDec = document.getElementById('b-dec');
const preview = document.getElementById('result-preview');

function updateVisualizer() {
    let hex = hexInput.value.replace(/[^0-9A-Fa-f]/g, '');
    
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    if (hex.length === 6) {
        const r = hex.substring(0, 2);
        const g = hex.substring(2, 4);
        const b = hex.substring(4, 6);

        rHex.textContent = r.toUpperCase();
        gHex.textContent = g.toUpperCase();
        bHex.textContent = b.toUpperCase();

        rDec.textContent = parseInt(r, 16);
        gDec.textContent = parseInt(g, 16);
        bDec.textContent = parseInt(b, 16);

        preview.style.backgroundColor = `#${hex}`;
        preview.style.boxShadow = `0 10px 40px rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, 0.4)`;
    }
}

hexInput.addEventListener('input', updateVisualizer);
updateVisualizer(); // Initial state

// Quiz Logic
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('quiz-result');

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let score = 0;
    const q1 = quizForm.q1.value;
    const q2 = quizForm.q2.value;
    const q3 = quizForm.q3.value;

    if (q1 === 'b') score++;
    if (q2 === '000') score++;
    if (q3 === 'b') score++;

    resultDiv.classList.remove('hidden');
    
    if (score === 3) {
        resultDiv.style.backgroundColor = 'rgba(105, 240, 174, 0.1)';
        resultDiv.style.color = '#69f0ae';
        resultDiv.textContent = 'Perfect score! 3/3 - You have a sharp eye for hex codes.';
    } else {
        resultDiv.style.backgroundColor = 'rgba(255, 82, 82, 0.1)';
        resultDiv.style.color = '#ff5252';
        resultDiv.textContent = `Score: ${score}/3 - Review the RR-GG-BB pairs and shorthand logic!`;
    }
});
