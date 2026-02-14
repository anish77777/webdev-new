document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    const total = 3;
    const form = e.target;
    
    if(form.q1.value === 'b') score++;
    if(form.q2.value === 'analogous') score++;
    if(form.q3.value === 'c') score++;
    
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    result.textContent = `You scored ${score} out of ${total}!`;
    result.style.color = score === total ? '#69f0ae' : '#ffab40';
    
    // Provide feedback for incorrect answers if needed
    if(score < total) {
        result.textContent += " Try reviewing the content!";
    }
});
