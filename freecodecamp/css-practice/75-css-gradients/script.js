// Gradient Playground Logic
const typeLinear = document.getElementById('type-linear');
const typeRadial = document.getElementById('type-radial');
const directionControl = document.getElementById('direction-control');
const shapeControl = document.getElementById('shape-control');
const directionSelect = document.getElementById('direction');
const shapeSelect = document.getElementById('shape');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const preview = document.getElementById('main-preview');
const codeOutput = document.getElementById('css-output');

function updateGradient() {
    const isLinear = typeLinear.checked;
    const c1 = color1.value;
    const c2 = color2.value;
    let gradientStr = "";

    if (isLinear) {
        directionControl.style.display = 'block';
        shapeControl.style.display = 'none';
        const dir = directionSelect.value;
        gradientStr = `linear-gradient(${dir}, ${c1}, ${c2})`;
    } else {
        directionControl.style.display = 'none';
        shapeControl.style.display = 'block';
        const shape = shapeSelect.value;
        gradientStr = `radial-gradient(${shape}, ${c1}, ${c2})`;
    }

    preview.style.background = gradientStr;
    codeOutput.textContent = `background: ${gradientStr};`;
}

[typeLinear, typeRadial, directionSelect, shapeSelect, color1, color2].forEach(el => {
    el.addEventListener('input', updateGradient);
});

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
    if (q2 === 'b') score++;
    if (q3 === 'c') score++;

    resultDiv.classList.remove('hidden');
    
    if (score === 3) {
        resultDiv.style.backgroundColor = 'rgba(3, 218, 198, 0.1)';
        resultDiv.style.color = '#03dac6';
        resultDiv.textContent = 'Awesome! 3/3 - You are a gradient master.';
    } else {
        resultDiv.style.backgroundColor = 'rgba(255, 82, 82, 0.1)';
        resultDiv.style.color = '#ff5252';
        resultDiv.textContent = `Score: ${score}/3 - Check transitions vs. focal points and try again!`;
    }
});
