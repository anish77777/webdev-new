document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Active State Handling
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 2. Toggle Error State Demo
    const toggleBtn = document.getElementById('toggle-error');
    const errorInput = document.getElementById('email-error-input');
    const errorMsg = document.getElementById('email-error');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isError = errorInput.classList.toggle('error');
            errorMsg.style.display = isError ? 'block' : 'none';
        });
    }

    // 3. Quiz Implementation
    const quizData = [
        {
            question: "When styling text inputs, which of the following is NOT mentioned as a key consideration for accessibility?",
            options: [
                "Font size.",
                "Color contrast with the background.",
                "Placeholder text readability.",
                "Animation speed of focus transitions."
            ],
            correct: 3
        },
        {
            question: "What is recommended regarding the resizing ability of a textarea input?",
            options: [
                "Remove the ability to resize for a consistent look.",
                "Allow the user to resize it.",
                "Automatically resize based on content length.",
                "Lock the size after initial page load."
            ],
            correct: 1
        },
        {
            question: "How should the error state of an input be styled?",
            options: [
                "It should be identical to the focus state.",
                "It should be subtle to not distract the user.",
                "It should be noticeable and distinct from the focus indicator.",
                "It should only be indicated through text, not visual styling."
            ],
            correct: 2
        }
    ];

    const quizContainer = document.getElementById('quiz-container');

    function loadQuiz() {
        quizData.forEach((data, index) => {
            const quizCard = document.createElement('div');
            quizCard.className = 'quiz-card';
            quizCard.innerHTML = `
                <div class="quiz-question">${index + 1}. ${data.question}</div>
                <div class="quiz-options" data-index="${index}">
                    ${data.options.map((option, i) => `
                        <button class="quiz-option" data-option="${i}">${option}</button>
                    `).join('')}
                </div>
                <div class="quiz-feedback" id="feedback-${index}"></div>
            `;
            quizContainer.appendChild(quizCard);
        });

        const submitBtn = document.createElement('button');
        submitBtn.id = 'quiz-submit';
        submitBtn.textContent = 'Submit Quiz';
        quizContainer.appendChild(submitBtn);

        submitBtn.addEventListener('click', checkAnswers);
    }

    let userSelections = new Array(quizData.length).fill(null);

    quizContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('quiz-option')) {
            const questionIndex = e.target.parentElement.dataset.index;
            const optionIndex = parseInt(e.target.dataset.option);
            
            // Mark selection
            userSelections[questionIndex] = optionIndex;

            // Visual update
            const options = e.target.parentElement.querySelectorAll('.quiz-option');
            options.forEach(opt => opt.classList.remove('selected'));
            e.target.classList.add('selected');
        }
    });

    function checkAnswers() {
        let score = 0;
        quizData.forEach((data, index) => {
            const feedback = document.getElementById(`feedback-${index}`);
            const options = quizContainer.querySelectorAll(`[data-index="${index}"] .quiz-option`);
            
            options.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
                const optIndex = parseInt(opt.dataset.option);
                if (optIndex === data.correct) {
                    opt.classList.add('correct');
                } else if (userSelections[index] === optIndex) {
                    opt.classList.add('incorrect');
                }
            });

            if (userSelections[index] === data.correct) {
                score++;
                feedback.textContent = 'Correct!';
                feedback.style.color = '#22c55e';
            } else {
                feedback.textContent = userSelections[index] === null ? 'No answer selected.' : 'Wrong answer.';
                feedback.style.color = '#ef4444';
            }
        });

        const submitBtn = document.getElementById('quiz-submit');
        submitBtn.innerHTML = `Score: ${score} / ${quizData.length} - ${score === quizData.length ? 'Perfect!' : 'Try again?'}`;
        if (score === quizData.length) {
            submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        }
    }

    loadQuiz();
});
