function revealCostume() {
    document.getElementById('costume-reveal').innerHTML = "I'm dressing up as a spooky ghost!";
    document.getElementById('costume-reveal').style.display = 'block';
}

function checkQuiz() {
    const q1 = document.getElementById('q1').value.toLowerCase();
    const q2 = document.getElementById('q2').value.toLowerCase();

    let score = 0;

    if (q1 === 'samhain') {
        score++;
    }
    if (q2 === 'protection from evil' || q2 === 'protection') {
        score++;
    }

    const result = document.getElementById('quiz-result');
    if (score === 2) {
        result.innerHTML = 'Congrats! You got both questions right!';
        result.classList.remove('wrong');
    } else {
        result.innerHTML = 'Oops! Try again!';
        result.classList.add('wrong');
    }
}
