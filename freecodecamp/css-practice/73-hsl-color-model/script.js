// HSL Mixer Controls
const hueRange = document.getElementById('hue');
const satRange = document.getElementById('sat');
const lightRange = document.getElementById('light');

const hueVal = document.getElementById('hue-val');
const satVal = document.getElementById('sat-val');
const lightVal = document.getElementById('light-val');

const preview = document.getElementById('color-preview');
const hslCode = document.getElementById('hsl-code');

function updateHSL() {
    const h = hueRange.value;
    const s = satRange.value;
    const l = lightRange.value;

    hueVal.textContent = h;
    satVal.textContent = s;
    lightVal.textContent = l;

    const color = `hsl(${h}, ${s}%, ${l}%)`;
    preview.style.backgroundColor = color;
    preview.style.boxShadow = `0 20px 50px hsla(${h}, ${s}%, ${l}%, 0.4)`;
    hslCode.textContent = color;
}

hueRange.addEventListener('input', updateHSL);
satRange.addEventListener('input', updateHSL);
lightRange.addEventListener('input', updateHSL);

// Initial call
updateHSL();

// Quiz Logic
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('quiz-result');

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let score = 0;
    const q1 = quizForm.q1.value;
    const q2 = quizForm.q2.value;
    const q3 = quizForm.q3.value;

    if (q1 === 'c') score++;
    if (q2 === '100') score++;
    if (q3 === 'b') score++;

    resultDiv.classList.remove('hidden');
    
    if (score === 3) {
        resultDiv.style.backgroundColor = 'rgba(0, 210, 255, 0.1)';
        resultDiv.style.color = '#00d2ff';
        resultDiv.textContent = 'Perfect score! 3/3 - You have a great grasp of the HSL model.';
    } else {
        resultDiv.style.backgroundColor = 'rgba(255, 120, 0, 0.1)';
        resultDiv.style.color = '#ff9800';
        resultDiv.textContent = `Score: ${score}/3 - Review the components and try again!`;
    }
});
