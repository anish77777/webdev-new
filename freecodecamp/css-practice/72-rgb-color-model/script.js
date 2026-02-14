// RGB Mixer Logic
const rRange = document.getElementById('r-range');
const gRange = document.getElementById('g-range');
const bRange = document.getElementById('b-range');
const preview = document.getElementById('color-preview');
const codeText = document.getElementById('rgb-code');

const rValDisplay = document.getElementById('r-val');
const gValDisplay = document.getElementById('g-val');
const bValDisplay = document.getElementById('b-val');

function updateMixer() {
    const r = rRange.value;
    const g = gRange.value;
    const b = bRange.value;
    
    rValDisplay.textContent = r;
    gValDisplay.textContent = g;
    bValDisplay.textContent = b;
    
    const color = `rgb(${r}, ${g}, ${b})`;
    preview.style.backgroundColor = color;
    preview.style.boxShadow = `0 10px 40px rgba(${r}, ${g}, ${b}, 0.5)`;
    codeText.innerHTML = `<code>${color}</code>`;
}

rRange.addEventListener('input', updateMixer);
gRange.addEventListener('input', updateMixer);
bRange.addEventListener('input', updateMixer);

// Quiz Logic
document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    const form = e.target;
    
    if (form.q1.value === 'b') score++;
    if (form.q2.value === 'rgba') score++;
    if (form.q3.value === '255') score++;
    
    const result = document.getElementById('quiz-result');
    result.classList.remove('hidden');
    
    if (score === 3) {
        result.textContent = "Perfect! 3/3 - You have a colorful mind.";
        result.style.backgroundColor = 'rgba(105, 240, 174, 0.1)';
        result.style.color = '#69f0ae';
    } else {
        result.textContent = `Score: ${score}/3 - Review the intensities and alpha values!`;
        result.style.backgroundColor = 'rgba(255, 171, 64, 0.1)';
        result.style.color = '#ffab40';
    }
});
