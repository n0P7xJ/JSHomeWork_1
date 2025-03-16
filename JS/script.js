function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTest() {
    let minQuestions = 8;
    let maxQuestions = 12;
    let numQuestions = getRandomNumber(minQuestions, maxQuestions);
    let correctAnswers = 0;

    for (let i = 0; i < numQuestions; i++) {
        let a = getRandomNumber(2, 9);
        let b = getRandomNumber(2, 9);
        let userAnswer = prompt(`Скільки буде ${a} * ${b}?`);

        if (userAnswer === null) {
            alert("Тест перервано!");
            return;
        }

        if (parseInt(userAnswer) === a * b) {
            correctAnswers++;
        }
    }

    showResult(correctAnswers, numQuestions);
}

function showResult(correctAnswers, numQuestions) {
    let score = Math.round((correctAnswers / numQuestions) * 100);
    let grade = "";

    if (score >= 90) grade = "Відмінно! (5)";
    else if (score >= 75) grade = "Добре (4)";
    else if (score >= 50) grade = "Задовільно (3)";
    else grade = "Погано (2)";

    document.getElementById("result").innerText = `Ви відповіли правильно на ${correctAnswers} з ${numQuestions} питань. Ваша оцінка: ${grade}`;
}
