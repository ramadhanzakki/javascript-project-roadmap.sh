function isAnswerCorrect(question, userAnswer){
    if (!userAnswer) {
        return false
    }

    return userAnswer.answer === question.correctAnswer
}

function countCorrectAnswers(questions, userAnswers){
    let correctCount = 0

    for (const question of questions) {
        const userAnswer = userAnswers.find(u => {
            return u.questionId === question.id
        })

        if (isAnswerCorrect(question, userAnswer)) {
            correctCount += 1
        }
    }

    return correctCount
}

function calculatePercentage(correctCount, totalQuestions){
    return (correctCount / totalQuestions) * 100
}

function getResultMessage(percentage){
    if (percentage >= 80) {
        return 'Good Job'
    }

    if (percentage >= 60) {
        return 'You Passed'
    }

    return 'Keep Practicing'
}

function createQuizResult(questions, userAnswers){
    const correctCount = countCorrectAnswers(questions, userAnswers)
    const totalQuestions = questions.length
    const percentage = calculatePercentage(correctCount, totalQuestions)
    const message = getResultMessage(percentage)

    return {
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        percentage: percentage,
        message: message
    }
}

const questions = [
    { id: 1, correctAnswer: 'B' },
    { id: 2, correctAnswer: 'A' },
    { id: 3, correctAnswer: 'D' },
    { id: 4, correctAnswer: 'C' },
];

const userAnswers = [
    { questionId: 1, answer: 'B' },
    { questionId: 2, answer: 'C' },
    { questionId: 3, answer: 'D' },
    { questionId: 4, answer: 'C' },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));