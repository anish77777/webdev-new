document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    const total = 3;
    const form = e.target;
    
    // Validate selections
    if (!form.q1.value || !form.q2.value || !form.q3.value) {
        alert("Please answer all questions before checking your score!");
        return;
    }

    // Check Answers
    if (form.q1.value === 'b') score++;
    if (form.q2.value === 'precision') score++;
    if (form.q3.value === 'named') score++;
    
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.classList.remove('hidden');
    
    resultDiv.textContent = `You scored ${score} out of ${total}!`;
    
    if (score === total) {
        resultDiv.style.backgroundColor = 'rgba(105, 240, 174, 0.1)';
        resultDiv.style.color = '#69f0ae';
        resultDiv.textContent += " Perfect! You've mastered named colors.";
    } else {
        resultDiv.style.backgroundColor = 'rgba(255, 171, 64, 0.1)';
        resultDiv.style.color = '#ffab40';
        resultDiv.textContent += " Good effort! Review the lesson and try again.";
    }
});
